<template>
  <Tooltip.Provider>
    <Tooltip.Root
      v-model:open="innerOpen"
      :delay-duration="delay"
      :disabled="disabled"
    >
      <Tooltip.Trigger as-child>
        <slot />
      </Tooltip.Trigger>

      <Tooltip.Portal :to="container">
        <Tooltip.Content
          :class="classes.content"
          :style="overlayStyle"
          align="center"
          :side-offset="5"
        >
          <div :class="classes.inner">
            <slot name="title">
              {{ title }}
            </slot>
          </div>
          <Tooltip.Arrow :class="classes.arrow" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
</template>

<script setup lang="ts">
import { useConfig } from '@/uses/config'
import { cx } from '@emotion/css'
import { useToken } from '@starry-ui/theme'
import { Tooltip } from 'radix-vue/namespaced'
import { computed, ref, watch } from 'vue'
import { genTooltipStyle, TooltipTokenFactory } from './style'
import { propTypes } from './type'

const props = defineProps(propTypes)
const emit = defineEmits<{
  'update:open': [boolean]
}>()
const slots = defineSlots<{
  default?: () => any
  title?: () => any
}>()

const config = useConfig()
const { token } = useToken()

//
// state

const innerOpen = ref(props.open)

watch(
  () => props.open,
  () => {
    innerOpen.value = props.open
  }
)

watch(
  () => innerOpen.value,
  () => {
    emit('update:open', innerOpen.value)
  }
)

//
// style

const componentCls = computed(() => `${config.value.prefixCls}Tooltip`)
const tooltipToken = computed(() =>
  TooltipTokenFactory(token.value, componentCls.value)
)

const classes = computed(() => {
  return {
    content: cx([
      `${componentCls.value}Content`,
      genTooltipStyle(tooltipToken.value),
      props.overlayClass
    ]),
    inner: `${componentCls.value}Inner`,
    arrow: `${componentCls.value}Arrow`
  }
})
</script>

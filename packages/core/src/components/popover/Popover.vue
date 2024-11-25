<template>
  <Popover.Root v-model:open="innerOpen" :disabled="disabled">
    <Popover.Trigger as-child>
      <slot name="trigger" />
    </Popover.Trigger>

    <Popover.Portal :to="container">
      <Popover.Content
        :class="classes.content"
        :style="overlayStyle"
        align="center"
        :side-offset="5"
        :side="placement"
        avoid-collisions
      >
        <div :class="classes.inner">
          <div :class="classes.title">
            <slot name="title">
              {{ title }}
            </slot>
          </div>
          <div :class="classes.innerContent">
            <slot name="content">
              {{ content }}
            </slot>
          </div>
        </div>
        <Popover.Arrow :class="classes.arrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
</template>

<script setup lang="ts">
import { useConfig } from '@/uses/config'
import { cx } from '@emotion/css'
import { useToken } from '@starry-ui/theme'
import { Popover } from 'radix-vue/namespaced'
import { computed, ref, watch } from 'vue'
import { genPopoverStyle, PopoverTokenFactory } from './style'
import { popoverPropTypes } from './type'

const props = defineProps(popoverPropTypes)
const emit = defineEmits<{
  'update:open': [boolean]
}>()
const slots = defineSlots<{
  trigger?: () => any
  title?: () => any
  content?: () => any
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

const componentCls = computed(() => `${config.value.prefixCls}Popover`)
const tooltipToken = computed(() =>
  PopoverTokenFactory(token.value, componentCls.value)
)

const classes = computed(() => {
  return {
    content: cx([
      `${componentCls.value}Content`,
      genPopoverStyle(tooltipToken.value),
      props.overlayClass
    ]),
    inner: `${componentCls.value}Inner`,
    arrow: `${componentCls.value}Arrow`,
    title: `${componentCls.value}Title`,
    innerContent: `${componentCls.value}Content`
  }
})
</script>

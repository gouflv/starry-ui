<script setup lang="ts">
import { useConfig } from '@/uses/config'
import { cx } from '@emotion/css'
import { useToken } from '@starry/theme'
import { computed } from 'vue'
import {
  genButtonBlockStyle,
  genButtonSharedStyle,
  genButtonSizeStyle,
  genButtonTypeStyle
} from './button.style'
import { propsType } from './types'

const { token } = useToken()
const config = useConfig()

defineOptions({
  name: 'SButton'
})

const props = defineProps(propsType())
const slots = defineSlots<{
  default: any
  icon: any
}>()
const emits = defineEmits<{
  click: [MouseEvent]
}>()

const mergedSize = computed(() => props.size || config.value.size)
const mergedDisabled = computed(() => props.disabled)

const classes = computed(() => {
  return cx(
    `${config.value.prefixCls}Button`,
    genButtonSharedStyle(token.value),
    genButtonTypeStyle(token.value, props.type),
    genButtonSizeStyle(token.value, mergedSize.value),
    props.block && genButtonBlockStyle(),
    props.danger && 'danger'
  )
})

function onClick(e: MouseEvent) {
  if (mergedDisabled.value || props.loading) return
  emits('click', e)
}
</script>

<template>
  <button
    v-bind="$attrs"
    :title="title"
    :disabled="mergedDisabled"
    :class="[classes, $attrs.class]"
    @click="onClick"
  >
    <slot name="icon" />
    <slot />
  </button>
</template>

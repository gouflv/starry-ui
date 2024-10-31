<script setup lang="ts">
import { useConfig } from '@/uses/config'
import { DownOutlined } from '@ant-design/icons-vue'
import { css, cx } from '@emotion/css'
import { useToken } from '@starry/theme'
import { useMounted, watchImmediate } from '@vueuse/core'
import { Select } from 'radix-vue/namespaced'
import { computed, ref, watch } from 'vue'
import {
  genBorderLessStyle,
  genItemStyle,
  genSizeStyle,
  genTriggerStyle,
  genViewportStyle,
  type SelectToken
} from './style'
import { propTypes, type Option, type RawValue } from './types'

const { token: _token } = useToken()
const token = computed<SelectToken>(() => ({
  ..._token.value,
  rootPrefixCls: `${config.value.prefixCls}Select`,
  inputPaddingHorizontalBase: _token.value.paddingSM - 1
}))

const config = useConfig()

defineOptions({ name: 'ASelect' })

const props = defineProps(propTypes)

const emits = defineEmits<{
  'update:open': [open: boolean]
  'update:value': [value: RawValue, option: Option]
  'update:searchValue': [search: string]
  search: [search: string]
}>()

const slots = defineSlots<{
  option: (option: Option) => any
  noFoundContent: () => any
}>()

//
// Value

const innerValue = ref<string>()

const value2RawMap = ref<Map<string, RawValue>>(new Map())
const raw2ValueMap = ref<Map<RawValue, string>>(new Map())
function getNormalizedValue(raw: RawValue) {
  if (raw2ValueMap.value.has(raw)) {
    return raw2ValueMap.value.get(raw) as string
  } else {
    const key = String(raw)
    value2RawMap.value.set(key, raw)
    raw2ValueMap.value.set(raw, key)
    return key
  }
}

function isValidateValue(value?: RawValue): value is RawValue {
  return (
    innerValue.value !== undefined &&
    props.options.some((option) => option.value === innerValue.value)
  )
}

watchImmediate(
  () => props.value,
  () => {
    innerValue.value = isValidateValue(props.value)
      ? getNormalizedValue(props.value)
      : undefined
  }
)

function onChange(value: string) {
  const rawValue = value2RawMap.value.get(value)!
  emits(
    'update:value',
    rawValue,
    props.options.find((option) => option.value === rawValue) as Option
  )
}

//
// State

const innerOpen = ref(props.open)

watch(
  () => props.open,
  () => {
    innerOpen.value = props.open
  }
)

//
// Dropdown

const triggerEl = ref()
const viewportWidth = ref<string>('auto')
const getDropdownWidth = () => {
  if (typeof props.dropdownWidth === 'number') {
    return `${props.dropdownWidth}px`
  } else if (props.dropdownWidth === 'select' && triggerEl.value) {
    return `${triggerEl.value.$el.offsetWidth}px`
  }
  return 'auto'
}

const mounted = useMounted()
watch(
  [mounted, innerOpen],
  () => {
    if (mounted.value && innerOpen.value) {
      viewportWidth.value = getDropdownWidth()
    }
  },
  { immediate: true, flush: 'sync' }
)

//
// Style

const align = computed(() => {
  return props.placement === 'bottomRight' ? 'end' : 'start'
})

const classes = computed(() => ({
  trigger: cx([
    `${config.value.prefixCls}SelectTrigger`,
    genTriggerStyle(token.value),
    genSizeStyle(token.value, props.size),
    !props.bordered && genBorderLessStyle(token.value)
  ]),
  viewport: cx([
    `${config.value.prefixCls}SelectViewport`,
    genViewportStyle(token.value),
    css({
      width: viewportWidth.value,
      maxHeight: props.listHeight
    })
  ]),
  item: cx([`${config.value.prefixCls}SelectItem`, genItemStyle(token.value)])
}))
</script>

<template>
  <Select.Root
    ref="trigger"
    v-model:open="innerOpen"
    v-model="innerValue"
    @update:model-value="onChange"
  >
    <Select.Trigger ref="triggerEl" :class="classes.trigger" v-bind="$attrs">
      <Select.Value
        :class="`${token.rootPrefixCls}Selection`"
        :placeholder="placeholder"
      />
      <DownOutlined :class="`${token.rootPrefixCls}Arrow`" />
    </Select.Trigger>
    <Select.Portal>
      <Select.Content
        position="popper"
        :avoidCollisions="true"
        :body-lock="false"
        :align="align"
      >
        <Select.Viewport :class="classes.viewport">
          <Select.Item
            :class="classes.item"
            v-for="option in options"
            :key="option.value"
            :value="getNormalizedValue(option.value)"
          >
            <Select.ItemText>{{ option.label }}</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
</template>

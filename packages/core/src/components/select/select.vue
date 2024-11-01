<script setup lang="ts">
import { useConfig } from '@/uses/config'
import { DownOutlined, LoadingOutlined } from '@ant-design/icons-vue'
import { css, cx } from '@emotion/css'
import { useToken } from '@starry/theme'
import { useMounted, watchImmediate } from '@vueuse/core'
import { Combobox as CB } from 'radix-vue/namespaced'
import { computed, ref, watch } from 'vue'
import {
  genBorderLessStyle,
  genDisabledStyle,
  genEmptyStyle,
  genItemStyle,
  genLoadingStyle,
  genScrollAreaStyle,
  genSelectionStyle,
  genSizeStyle,
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

const innerValue = ref<RawValue>()

watchImmediate(
  () => props.value,
  () => {
    innerValue.value = props.value
  }
)

function onValueChange(value: RawValue) {
  emits(
    'update:value',
    value,
    props.options.find((option) => option.value === value) as Option
  )
}

//
// State

// open
const innerOpen = ref(props.open)
function onOpenChange(open: boolean) {
  emits('update:open', open)
}
watch(
  () => props.open,
  () => {
    innerOpen.value = props.open
  }
)

// search
const innerSearchValue = ref<string>()
function onSearchValueChange(search: string) {
  innerSearchValue.value = search
  emits('update:searchValue', search)
  emits('search', search)
}
watch(
  () => props.searchValue,
  () => {
    innerSearchValue.value = props.searchValue
  }
)

const displayValue = computed(() => {
  if (innerValue.value === undefined) return
  return getDisplayValue(innerValue.value) || innerValue.value
})

function getDisplayValue(value: RawValue) {
  const option = props.options.find((option) => option.value === value)
  return option ? option.label : ''
}

//
// Option

const isFilterMode = computed(() => !!props.filterOption)

const mergedOptions = computed(() => {
  // TODO implement filter function
  return props.options
})

const isEmpty = computed(() => mergedOptions.value.length === 0)

//
// Dropdown

const selectionRef = ref()
const viewportWidth = ref<string>('auto')
const getDropdownWidth = () => {
  if (typeof props.dropdownWidth === 'number') {
    return `${props.dropdownWidth}px`
  } else if (props.dropdownWidth === 'select' && selectionRef.value) {
    return `${selectionRef.value.$el.offsetWidth}px`
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
  return props.placement === 'right' ? 'end' : 'start'
})

const classes = computed(() => ({
  selection: cx([
    `${config.value.prefixCls}Selection`,
    genSelectionStyle(token.value),
    genSizeStyle(token.value, props.size),
    !props.bordered && genBorderLessStyle(token.value),
    props.disabled && genDisabledStyle(token.value)
  ]),
  viewport: cx([
    `${config.value.prefixCls}SelectViewport`,
    genViewportStyle(token.value),
    css({
      width: viewportWidth.value
    })
  ]),
  scroll: cx([
    `${config.value.prefixCls}SelectScroll`,
    genScrollAreaStyle(token.value),
    css({
      maxHeight: props.listHeight
    })
  ]),
  item: cx([`${config.value.prefixCls}SelectItem`, genItemStyle(token.value)]),
  empty: cx([
    `${config.value.prefixCls}SelectEmpty`,
    genEmptyStyle(token.value)
  ]),
  loading: css([
    `${config.value.prefixCls}SelectLoading`,
    genLoadingStyle(token.value)
  ])
}))
</script>

<template>
  <CB.Root
    ref="trigger"
    v-model:open="innerOpen"
    v-model="innerValue"
    :display-value="getDisplayValue"
    :disabled="disabled"
    @update:open="onOpenChange"
    @update:model-value="onValueChange"
  >
    <CB.Trigger as-child>
      <CB.Anchor
        as="div"
        ref="selectionRef"
        :class="classes.selection"
        v-bind="$attrs"
      >
        <CB.Input
          :class="`${token.rootPrefixCls}Input`"
          :placeholder="placeholder"
        />
        <!-- <template v-else>
          <span v-if="displayValue" :class="`${token.rootPrefixCls}Text`">
            {{ displayValue }}
          </span>
          <span v-else :class="`${token.rootPrefixCls}Placeholder`">
            {{ placeholder }}
          </span>
        </template> -->
        <DownOutlined :class="`${token.rootPrefixCls}Arrow`" /> </CB.Anchor
      </CB.Anchor>
    </CB.Trigger>
    <CB.Portal>
      <CB.Content
        position="popper"
        :avoidCollisions="true"
        :body-lock="false"
        :align="align"
      >
        <CB.Viewport :class="classes.viewport">
          <!-- Loading -->
          <div v-if="loading" :class="classes.loading">
            <LoadingOutlined />
          </div>
          <!-- Empty -->
          <slot name="noFoundContent" v-else-if="isEmpty">
            <div :class="classes.empty">{{ noFoundContent }}</div>
          </slot>
          <!-- Scroll -->
          <div v-else :class="classes.scroll">
            <CB.Item
              :class="classes.item"
              v-for="option in options"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </CB.Item>
          </div>
        </CB.Viewport>
      </CB.Content>
    </CB.Portal>
  </CB.Root>
</template>

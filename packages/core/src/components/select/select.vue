<script setup lang="ts">
import { useConfig } from '@/uses/config'
import { DownOutlined, LoadingOutlined } from '@ant-design/icons-vue'
import { css, cx } from '@emotion/css'
import { useToken } from '@starry/theme'
import { useDebounceFn, useMounted } from '@vueuse/core'
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
import {
  propTypes,
  type Option,
  type OptionFilter,
  type RawValue
} from './types'

// TODO
// 1. replace arrow icon with spin when loading, and disable dropdown open

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

defineSlots<{
  option: (option: Option) => any
  noFoundContent: () => any
}>()

//
// Value

const innerValue = ref(props.value)

watch(
  () => props.value,
  () => {
    innerValue.value = props.value
  }
)

function onValueChange(value: RawValue) {
  // set
  innerValue.value = value

  // emit
  emits(
    'update:value',
    value,
    props.options.find((option) => option.value === value) as Option
  )
}

//
// State

// Open
const innerOpen = ref(props.open)

watch(
  // sync inner state
  () => props.open,
  () => {
    innerOpen.value = props.open
  }
)

function onOpenChange(open: boolean) {
  if (props.disabled) return

  innerOpen.value = open
  emits('update:open', open)

  if (open) {
    // clear search term when open
    searchTerm.value = ''
  }
}

const focus = ref(false)

// Search
const searchTerm = ref<string>()
const isSearchInputMode = computed(() => props.showSearch && innerOpen.value)
const hasInputSearchValue = computed(
  () => isSearchInputMode.value && !!searchTerm.value
)

const searchDebounceFn = useDebounceFn(
  (value: string) => emits('search', value),
  props.searchEventDebounce
)

function onSearchTermChange(value: string) {
  searchTerm.value = value.trim()
  if (props.showSearch && !props.filterOption) {
    searchDebounceFn(searchTerm.value)
  }
}

// Text

const hasValue = computed(() => innerValue.value !== undefined)

const displayValue = computed(() => {
  if (!hasValue.value) return
  return getDisplayValue(innerValue.value!) || innerValue.value
})

const innerPlaceholder = computed(() => {
  if (hasValue.value) return false
  if (hasInputSearchValue.value) return false
  return props.placeholder
})

const mergedDisplayValue = computed(() => {
  // search mode
  if (props.showSearch) {
    // show only
    // - placeholder
    // - dropdown open and not input search value yet
    if (innerOpen.value) {
      return !hasInputSearchValue.value ? displayValue.value : ''
    } else {
      return innerValue.value ? '' : props.placeholder
    }
  }
  // select mode
  else {
    return displayValue.value || props.placeholder
  }
})

function getDisplayValue(value: RawValue) {
  const option = props.options.find((option) => option.value === value)
  return option ? option.label : ''
}

// Search and Text model switch
// 1. show search on mount
// 2. if search term change, filter options, hide display-value
// 3. if option selected change, clean search term, show display-value behind search input
// 4. if focus on search, fade display-value
// 5. if blur on search, show display-value, clean search term

// Option
const mergedOptions = computed(() => {
  if (props.showSearch && props.filterOption && searchTerm.value) {
    return optionFilter(props.options, searchTerm.value)
  }
  return props.options
})

function optionFilter(opts: Option[], term: string) {
  console.log('optionFilter', opts, term)

  if (props.filterOption) {
    const func =
      typeof props.filterOption === 'function'
        ? props.filterOption
        : defaultOptionFilter
    return opts.filter((option) => func(option, term))
  } else {
    emits('search', term)
    return []
  }
}

const defaultOptionFilter: OptionFilter = (option, term) => {
  return option.label.includes(term)
}

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
  { immediate: true }
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

function onKeyUpDownEnter(e: KeyboardEvent) {
  if (props.disabled) return
  if (props.showSearch) return
  e.preventDefault()
  innerOpen.value = true
  // TODO make arrow key work in menu
}
</script>

<template>
  <CB.Root
    :open="innerOpen"
    :model-value="innerValue"
    :display-value="getDisplayValue"
    :search-term="searchTerm"
    :disabled="disabled"
    @update:open="onOpenChange"
    @update:model-value="onValueChange"
    @update:search-term="onSearchTermChange"
  >
    <CB.Trigger as-child>
      <CB.Anchor
        ref="selectionRef"
        as="div"
        :class="classes.selection"
        :tabindex="showSearch ? -1 : 0"
        v-bind="$attrs"
        @focus="focus = true"
        @blur="focus = false"
        @keydown.up.down.enter="onKeyUpDownEnter"
      >
        <!-- Input -->
        <div v-if="showSearch" :class="`${token.rootPrefixCls}Input`">
          <CB.Input />
        </div>

        <!-- Text -->
        <span
          :class="
            cx([
              `${token.rootPrefixCls}Text`,
              innerPlaceholder && 'placeholder'
            ])
          "
        >
          {{ mergedDisplayValue }}
        </span>

        <!-- Arrow -->
        <DownOutlined :class="`${token.rootPrefixCls}Arrow`" />
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

          <!-- Scroll -->
          <div v-if="!loading && !isEmpty" :class="classes.scroll">
            <CB.Item
              :class="classes.item"
              v-for="option in mergedOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </CB.Item>
          </div>

          <!-- Empty -->
          <CB.Empty v-if="!loading">
            <div :class="classes.empty">{{ noFoundContent }}</div>
          </CB.Empty>
        </CB.Viewport>
      </CB.Content>
    </CB.Portal>
  </CB.Root>
</template>

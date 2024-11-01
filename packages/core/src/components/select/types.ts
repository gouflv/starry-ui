import type { PlacementType, SizeType } from '@/types'
import type { PropType } from 'vue'

export type RawValue = string | number

export type Option = {
  label: string
  value: RawValue
  disabled?: boolean
}

export const propTypes = {
  // Basic
  open: Boolean,
  value: [String, Number] as PropType<RawValue>,
  options: {
    type: Array as PropType<Option[]>,
    default: () => []
  },

  // UI
  loading: Boolean,
  allowClear: Boolean,
  autoFocus: Boolean,
  disabled: Boolean,
  bordered: {
    type: Boolean,
    default: true
  },
  size: {
    type: String as PropType<SizeType>,
    default: 'medium'
  },
  listHeight: {
    type: Number,
    default: 256
  },
  placeholder: {
    type: String,
    default: '请选择'
  },
  dropdownWidth: {
    type: [String, Number] as PropType<'select' | 'auto' | number>,
    default: 'select'
  },
  noFoundContent: {
    type: String,
    default: '暂无数据'
  },
  placement: String as PropType<PlacementType>,

  // Search
  showSearch: Boolean,
  filterOption: [Boolean, Function] as PropType<
    boolean | ((input: string, option: Option) => boolean)
  >,
  searchValue: String
}

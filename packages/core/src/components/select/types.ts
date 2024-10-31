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
  allowClear: Boolean,
  autoFocus: Boolean,
  disabled: Boolean,
  bordered: {
    type: Boolean,
    default: true
  },
  size: String as PropType<SizeType>,
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
  noFoundContent: String,
  placement: String as PropType<PlacementType>,

  // Search
  filterOption: [Boolean, Function] as PropType<
    boolean | ((input: string, option: Option) => boolean)
  >,
  searchValue: String
}

import type { SizeType } from '@/types'
import type { ExtractPublicPropTypes, PropType } from 'vue'

const InputHTMLProps = {
  autocomplete: String,
  id: String,
  name: String,
  placeholder: String
}

export const inputPropTypes = {
  allowClear: Boolean,
  borderer: {
    type: Boolean,
    default: true
  },
  disabled: Boolean,
  status: {
    type: String as PropType<'error' | 'warning' | 'success'>
  },
  size: {
    type: String as PropType<SizeType>,
    default: 'middle'
  },
  type: {
    type: String as PropType<HTMLInputElement['type']>,
    default: 'text'
  },
  value: String,
  ...InputHTMLProps
}

export type InputPropTypes = ExtractPublicPropTypes<typeof inputPropTypes>

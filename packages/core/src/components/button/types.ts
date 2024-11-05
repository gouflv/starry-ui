import type { SizeType } from '@/types'
import type { ExtractPublicPropTypes, PropType } from 'vue'

export type ButtonType = 'default' | 'primary' | 'link' | 'text'

export type ButtonShape = 'default' | 'circle' | 'round'

export type ButtonHTMLType = 'submit' | 'button' | 'reset'

export const propsType = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'default'
  },
  htmlType: {
    type: String as PropType<ButtonHTMLType>,
    default: 'button'
  },
  shape: {
    type: String as PropType<ButtonShape>,
    default: 'default'
  },
  size: {
    type: String as PropType<SizeType>,
    default: 'middle'
  },
  loading: Boolean,
  disabled: Boolean,
  block: Boolean,
  danger: Boolean,
  icon: Object,
  title: String,
  href: String,
  target: String
}

export type ButtonPropType = ExtractPublicPropTypes<typeof propsType>

import { VNodeTypes } from '@/_utils/interface'
import { SizeType } from '@/config-provider'
import type { PropType } from 'vue'

export type ButtonType = 'default' | 'primary' | 'link' | 'text'

export type ButtonShape = 'default' | 'circle' | 'round'

export type ButtonHTMLType = 'submit' | 'button' | 'reset'

export const buttonPropTypes = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'default',
  },
  htmlType: {
    type: String as PropType<ButtonHTMLType>,
    default: 'button',
  },
  shape: {
    type: String as PropType<ButtonShape>,
    default: 'default',
  },
  size: {
    type: String as PropType<SizeType>,
    default: 'middle',
  },
  loading: Boolean,
  disabled: Boolean,
  block: Boolean,
  danger: Boolean,
  icon: Object as PropType<VNodeTypes>,
  title: String,
  href: String,
  target: String,
}

import type { MouseEventHandler, SizeType } from '@/types'
import type { ExtractPublicPropTypes } from 'vue'
import { any, bool, func, object, oneOfType, string } from 'vue-types'

export type ButtonType =
  | 'default'
  | 'primary'
  | 'link'
  // | 'ghost'
  | 'text'

export type ButtonShape = 'default' | 'circle' | 'round'

export type ButtonHTMLType = 'submit' | 'button' | 'reset'

export const propsType = () => ({
  type: string<ButtonType>().def('default'),
  htmlType: string<ButtonHTMLType>().def('button'),
  shape: string<ButtonShape>().def('default'),
  size: string<SizeType>().def('middle'),
  loading: oneOfType([bool(), object<{ delay?: number }>()]).def(false),
  disabled: bool(),
  ghost: bool(),
  block: bool(),
  danger: bool(),
  icon: any(),
  title: string(),
  onClick: func<MouseEventHandler>()
})

export type ButtonProps = ExtractPublicPropTypes<ReturnType<typeof propsType>>

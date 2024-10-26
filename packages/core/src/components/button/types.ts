import type { MouseEventHandler, SizeType } from '@/types'
import { any, bool, func, object, oneOfType, string } from 'vue-types'

export type ButtonType =
  | 'link'
  | 'default'
  | 'primary'
  | 'ghost'
  | 'dashed'
  | 'text'

export type ButtonShape = 'default' | 'circle' | 'round'

export type ButtonHTMLType = 'submit' | 'button' | 'reset'

export const buttonProps = () => ({
  type: string<ButtonType>().def('default'),
  htmlType: string<ButtonHTMLType>().def('button'),
  shape: string<ButtonShape>().def('default'),
  size: string<SizeType>(),
  loading: oneOfType([bool(), object<{ delay?: number }>()]).def(false),
  disabled: bool(),
  ghost: bool(),
  block: bool(),
  danger: bool(),
  icon: any(),
  title: string(),
  onClick: func<MouseEventHandler>()
})

export type ButtonProps = ReturnType<typeof buttonProps>

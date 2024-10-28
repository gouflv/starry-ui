import type { SizeType } from '@/types'
import { type ComputedRef, type InjectionKey } from 'vue'

export type ConfigProviderContext = {
  prefixCls: string
  size: SizeType
}

export const defaultConfig: ConfigProviderContext = {
  prefixCls: 'st',
  size: 'middle'
}

export const ConfigProviderKey: InjectionKey<
  ComputedRef<ConfigProviderContext>
> = Symbol('ConfigProviderKey')

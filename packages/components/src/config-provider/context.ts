import type { ComputedRef, InjectionKey } from 'vue'
import type { SizeType } from './types'

export type ConfigProviderContext = {
  prefixCls: string
  componentSize: SizeType
  componentDisabled: boolean
}

export const defaultConfig: ConfigProviderContext = {
  prefixCls: 'starry',
  componentSize: 'middle',
  componentDisabled: false,
}

export const ConfigProviderKey: InjectionKey<
  ComputedRef<ConfigProviderContext>
> = Symbol('ConfigProviderKey')

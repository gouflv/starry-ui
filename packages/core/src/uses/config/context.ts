import type { SizeType } from '@/types'
import { computed, inject, type ComputedRef, type InjectionKey } from 'vue'

export type ConfigProviderContext = {
  prefixCls: string
  size: SizeType
}

export const defaultConfig: ConfigProviderContext = {
  prefixCls: 'S',
  size: 'middle'
}

export const ConfigProviderKey: InjectionKey<
  ComputedRef<ConfigProviderContext>
> = Symbol('ConfigProviderKey')

export function useConfig() {
  const context = inject(
    ConfigProviderKey,
    computed(() => defaultConfig)
  )

  return context
}

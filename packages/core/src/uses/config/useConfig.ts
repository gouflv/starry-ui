import { computed, inject } from 'vue'
import { ConfigProviderKey, defaultConfig } from './context'

export function useConfig() {
  const context = inject(
    ConfigProviderKey,
    computed(() => defaultConfig)
  )

  return {
    config: context
  }
}

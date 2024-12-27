import { computed, inject } from 'vue'
import { ConfigProviderKey, defaultConfig } from './context'

export default function useConfig() {
  return inject(
    ConfigProviderKey,
    computed(() => defaultConfig),
  )
}

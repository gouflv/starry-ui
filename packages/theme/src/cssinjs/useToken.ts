import { computed, ComputedRef, inject } from 'vue'
import { AliasToken, GlobalToken, MapToken, SeedToken } from '../interface'
import { defaultTheme, getComputedToken } from '../internal'
import defaultSeedToken from '../themes/seed'
import formatToken from '../utils/alias'
import {
  defaultConfig,
  DesignTokenContext,
  DesignTokenContextKey,
  globalDesignTokenApi
} from './context'
import Theme from './theme/Theme'

export function useToken(): [
  ComputedRef<Theme<SeedToken, MapToken>>,
  ComputedRef<GlobalToken>
] {
  const context = inject<ComputedRef<DesignTokenContext>>(
    DesignTokenContextKey,
    computed(() => globalDesignTokenApi.value || defaultConfig)
  )

  const theme = computed(() => context.value.theme || defaultTheme)

  const mergedTokens = computed<any>(
    () => Object.assign({}, defaultSeedToken, context.value.token) as AliasToken
  )

  const overrideToken = computed<Partial<AliasToken>>(
    () => context.value.token || {}
  )

  const mergedDerivativeToken = computed(() =>
    getComputedToken(
      mergedTokens.value,
      overrideToken.value,
      theme.value,
      formatToken
    )
  )

  return [theme, mergedDerivativeToken]
}

import { computed, ComputedRef, inject } from 'vue'
import { GlobalToken, MapToken, SeedToken } from '../interface'
import { defaultTheme } from '../internal'
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

  const mergedTokens = Object.assign({}, defaultSeedToken, context.value.token)

  const mergedDerivativeToken = getComputedToken(
    mergedTokens,
    theme.value,
    formatToken
  )

  return [theme, mergedDerivativeToken]
}

const getComputedToken = <
  DerivativeToken = object,
  DesignToken = DerivativeToken
>(
  token: DesignToken,
  theme: Theme<any, any>,
  format: (token: any) => any
) => {
  const derivativeToken = theme.getDerivativeToken(token)
  const mergedDerivativeToken = format({ ...derivativeToken })
  return mergedDerivativeToken
}

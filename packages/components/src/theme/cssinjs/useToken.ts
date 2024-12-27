import {
  computeToken,
  defaultSeedToken,
  formatToken,
  type AliasToken,
} from '@starry-ui/theme'
import { computed, inject, type ComputedRef } from 'vue'
import { DesignTokenContext, DesignTokenContextKey } from './context'

export const defaultConfig: DesignTokenContext = {
  token: defaultSeedToken,
}

export default function useToken(): ComputedRef<AliasToken> {
  const context = inject<ComputedRef<DesignTokenContext>>(
    DesignTokenContextKey,
    computed(() => defaultConfig),
  )

  const theme = computed(() => context.value.theme!)

  const mergedTokens = computed<any>(() =>
    Object.assign({}, defaultSeedToken, context.value.token),
  )

  const overrideToken = computed(() => context.value.token || {})

  const mergedDerivativeToken = computed(() =>
    computeToken(
      mergedTokens.value,
      overrideToken.value,
      theme.value,
      formatToken,
    ),
  )

  return mergedDerivativeToken
}

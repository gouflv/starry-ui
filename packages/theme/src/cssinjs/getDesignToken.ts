import type { AliasToken, MapToken, SeedToken } from '../interface'
import formatToken from '../internal/alias'
import getComputedToken from '../internal/computeToken'
import createTheme from '../internal/createTheme'
import type { DerivativeFunc } from '../internal/interface'
import defaultDerivative from '../themes/default'
import seedToken from '../themes/seed'

type ThemeConfig = {
  token?: Partial<AliasToken>
  derivative?:
    | DerivativeFunc<SeedToken, MapToken>
    | DerivativeFunc<SeedToken, MapToken>[]
}

export default function getDesignToken(config?: ThemeConfig): AliasToken {
  const theme = config?.derivative
    ? createTheme(config.derivative)
    : createTheme(defaultDerivative)

  const mergedToken = {
    ...seedToken,
    ...config?.token,
  }
  return getComputedToken(
    mergedToken as any,
    config?.token || {},
    theme,
    formatToken,
  )
}
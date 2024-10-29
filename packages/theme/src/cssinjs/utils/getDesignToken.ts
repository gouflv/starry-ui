import type { AliasToken, MapToken, SeedToken } from '../../interface'
import { getComputedToken } from '../../internal'
import defaultDerivative from '../../themes/default'
import seedToken from '../../themes/seed'
import formatToken from '../../utils/alias'
import createTheme from '../theme/createTheme'
import type { DerivativeFunc } from '../theme/interface'

type ThemeConfig = {
  token?: Partial<AliasToken>
  derivative?:
    | DerivativeFunc<SeedToken, MapToken>
    | DerivativeFunc<SeedToken, MapToken>[]
}

const getDesignToken = (config?: ThemeConfig): AliasToken => {
  const theme = config?.derivative
    ? createTheme(config.derivative)
    : createTheme(defaultDerivative)
  const mergedToken = {
    ...seedToken,
    ...config?.token
  }
  return getComputedToken(
    mergedToken as any,
    config?.token || {},
    theme,
    formatToken
  )
}

export default getDesignToken

import createTheme from './cssinjs/theme/createTheme'
import Theme from './cssinjs/theme/Theme'
import defaultDerivative from './themes/default'

export const defaultTheme = createTheme(defaultDerivative)

export const getComputedToken = <
  DerivativeToken = object,
  DesignToken = DerivativeToken
>(
  originToken: DesignToken,
  override: object,
  theme: Theme<any, any>,
  format?: (token: DesignToken) => DerivativeToken
) => {
  const derivativeToken = theme.getDerivativeToken(originToken)

  let mergedDerivativeToken = {
    ...derivativeToken,
    ...override
  }

  if (format) {
    mergedDerivativeToken = format(mergedDerivativeToken)
  }

  return mergedDerivativeToken
}

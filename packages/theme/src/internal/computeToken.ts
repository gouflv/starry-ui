import Theme from './Theme'

// @see [ant-design-vue] cssinjs/hooks/useCacheToken
const getComputedToken = <
  DerivativeToken = object,
  DesignToken = DerivativeToken,
>(
  originToken: DesignToken,
  override: object,
  theme: Theme<any, any>,
  format?: (token: DesignToken) => DerivativeToken,
) => {
  const derivativeToken = theme.getDerivativeToken(originToken)

  let mergedDerivativeToken = {
    ...derivativeToken,
    ...override,
  }

  if (format) {
    mergedDerivativeToken = format(mergedDerivativeToken)
  }

  return mergedDerivativeToken
}

export default getComputedToken

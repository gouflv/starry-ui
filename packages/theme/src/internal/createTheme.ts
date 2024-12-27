import type { DerivativeFunc, TokenType } from './interface'
import Theme from './Theme'

export default function createTheme<
  DesignToken extends TokenType,
  DerivativeToken extends TokenType
>(
  derivatives:
    | DerivativeFunc<DesignToken, DerivativeToken>[]
    | DerivativeFunc<DesignToken, DerivativeToken>
) {
  const derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives]

  return new Theme(derivativeArr)
}

import { DerivativeFunc, TokenType } from './interface'

/**
 * Theme with algorithms to derive tokens from design tokens.
 */
export default class Theme<
  DesignToken extends TokenType,
  DerivativeToken extends TokenType
> {
  private derivatives: DerivativeFunc<DesignToken, DerivativeToken>[]

  constructor(
    derivatives:
      | DerivativeFunc<DesignToken, DerivativeToken>
      | DerivativeFunc<DesignToken, DerivativeToken>[]
  ) {
    this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives]
    if (derivatives.length === 0) {
      console.warn(
        '[Starry-UI] Theme should have at least one derivative function.'
      )
    }
  }

  getDerivativeToken(token: DesignToken): DerivativeToken {
    return this.derivatives.reduce<DerivativeToken>(
      (result, derivative) => derivative(token, result),
      undefined as any
    )
  }
}

// cssinjs is reference to @ant-design/cssinjs that use isolated types

export type TokenType = object
export type DerivativeFunc<
  DesignToken extends TokenType,
  DerivativeToken extends TokenType
> = (
  designToken: DesignToken,
  derivativeToken?: DerivativeToken
) => DerivativeToken

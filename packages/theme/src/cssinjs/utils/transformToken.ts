import type { AliasToken } from '../../interface'

export const token2CSSVar = (token: string, prefix = '') => {
  return `--${prefix ? `${prefix}-` : ''}${token}`
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1-$2')
    .replace(/([a-z])([A-Z0-9])/g, '$1-$2')
    .toLowerCase()
}
export const token2LESSVar = (token: string, prefix = '') => {
  return `@${prefix ? `${prefix}-` : ''}${token}`
}
export const token2SCSSVar = (token: string, prefix = '') => {
  return `$${prefix ? `${prefix}-` : ''}${token}`
}

export const serializeCSSVar = <T extends Record<string, any>>(
  cssVars: T,
  scope?: string,
) => {
  if (!Object.keys(cssVars).length) {
    return ''
  }
  const result = Object.entries(cssVars)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n')
  return scope ? `${scope} {\n${result}\n}` : result
}

export type TokenWithCSSVar<
  V,
  T extends Record<string, V> = Record<string, V>,
> = {
  [key in keyof T]?: string | V
}

const preserveToken: {
  [key in keyof AliasToken]?: boolean
} = {
  // screenXS: true,
  // screenXSMin: true,
  // screenXSMax: true,
  // screenSM: true,
  // screenSMMin: true,
  // screenSMMax: true,
  // screenMD: true,
  // screenMDMin: true,
  // screenMDMax: true,
  // screenLG: true,
  // screenLGMin: true,
  // screenLGMax: true,
  // screenXL: true,
  // screenXLMin: true,
  // screenXLMax: true,
  // screenXXL: true,
  // screenXXLMin: true
}

const ignoreToken: {
  [key in keyof AliasToken]?: boolean
} = {
  // size: true,
  // sizeSM: true,
  // sizeLG: true,
  // sizeMD: true,
  // sizeXS: true,
  // sizeXXS: true,
  // sizeMS: true,
  // sizeXL: true,
  // sizeXXL: true,
  // sizeUnit: true,
  // sizeStep: true,
  // motionBase: true,
  // motionUnit: true
}

const unitlessToken: {
  [key in keyof AliasToken]?: boolean
} = {
  lineHeight: true,
  lineHeightSM: true,
  lineHeightLG: true,
  lineHeightHeading1: true,
  lineHeightHeading2: true,
  lineHeightHeading3: true,
  lineHeightHeading4: true,
  lineHeightHeading5: true,
  opacityLoading: true,
  fontWeightStrong: true,
  zIndexPopupBase: true,
  zIndexBase: true,
  // opacityImage: true,
}

export const transformToken = <
  V,
  T extends Record<string, V> = Record<string, V>,
>(
  token: T,
  config?: {
    ignore?: {
      [key in keyof T]?: boolean
    }
    unitless?: {
      [key in keyof T]?: boolean
    }
    preserve?: {
      [key in keyof T]?: boolean
    }
    prefix?: string
    scope?: string
    lang?: 'css' | 'less' | 'scss'
  },
): string => {
  const ignore = config?.ignore || ignoreToken
  const unitless = config?.unitless || unitlessToken
  const preserve = config?.preserve || preserveToken
  const lang = config?.lang || 'css'
  const keyTransform =
    lang === 'less'
      ? token2LESSVar
      : lang === 'scss'
        ? token2SCSSVar
        : token2CSSVar

  const result: Record<string, string> = {}
  Object.entries(token).forEach(([key, value]) => {
    if (preserve?.[key]) {
      result[key] = value as any
    } else if (
      (typeof value === 'string' || typeof value === 'number') &&
      !ignore?.[key]
    ) {
      const cssVar = keyTransform(key, config?.prefix)
      result[cssVar] =
        typeof value === 'number' && !unitless?.[key]
          ? `${value}px`
          : String(value)
    }
  })
  return serializeCSSVar(result, config?.scope)
}

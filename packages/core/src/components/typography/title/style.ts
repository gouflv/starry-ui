import { css } from '@emotion/css'
import type { AliasToken } from '@starry-ui/theme'

export interface TitleToken extends AliasToken {
  componentCls: string
  sizeMarginHeadingVerticalStart: number | string
  sizeMarginHeadingVerticalEnd: number | string
}

export const TitleTokenFactory = (
  aliasToken: AliasToken,
  componentCls: string
): TitleToken => {
  return {
    ...aliasToken,
    componentCls,
    sizeMarginHeadingVerticalStart: '1.2em',
    sizeMarginHeadingVerticalEnd: '0.5em'
  }
}

export const genTitleStyle = (token: TitleToken) => {
  const styles = ([1, 2, 3, 4, 5] as const).reduce((acc, level) => {
    acc[`h${level}&`] = css(
      getTitleStyle(
        token[`fontSizeHeading${level}`],
        token[`lineHeightHeading${level}`],
        token.colorTextHeading,
        token
      )
    )
    return acc
  }, {} as any)

  return css({
    ...styles,

    [`& + .${token.componentCls}`]: {
      marginBottom: token.sizeMarginHeadingVerticalStart
    }
  })
}

const getTitleStyle = (
  fontSize: number,
  lineHeight: number,
  color: string,
  token: TitleToken
) => {
  const { sizeMarginHeadingVerticalEnd, fontWeightStrong } = token
  return {
    marginBottom: sizeMarginHeadingVerticalEnd,
    color,
    fontWeight: fontWeightStrong,
    fontSize,
    lineHeight
  }
}

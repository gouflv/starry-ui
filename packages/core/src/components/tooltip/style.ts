import { resetComponent } from '@/utils/style'
import { css } from '@emotion/css'
import type { AliasToken } from '@starry-ui/theme'

export interface TooltipToken extends AliasToken {
  componentCls: string
  tooltipMaxWidth: number
  tooltipColor: string
  tooltipBg: string
  tooltipBorderRadius: number
  tooltipRadiusOuter: number
}

export function TooltipTokenFactory(
  token: AliasToken,
  componentCls: string
): TooltipToken {
  const {
    borderRadius,
    colorTextLightSolid,
    colorBgSpotlight,
    borderRadiusOuter
  } = token
  return {
    ...token,
    componentCls,
    tooltipMaxWidth: 250,
    tooltipColor: colorTextLightSolid,
    tooltipBorderRadius: borderRadius,
    tooltipBg: colorBgSpotlight,
    tooltipRadiusOuter: borderRadiusOuter > 4 ? 4 : borderRadiusOuter
  }
}

export function genTooltipStyle(token: TooltipToken) {
  return css({
    // Content
    maxWidth: token.tooltipMaxWidth,
    zIndex: token.zIndexPopupBase + 70,

    [`.${token.componentCls}Inner`]: {
      ...resetComponent(token),
      position: 'relative',
      minWidth: token.controlHeight,
      minHeight: token.controlHeight,
      padding: `${token.paddingSM / 2}px ${token.paddingXS}px`,
      color: token.tooltipColor,
      textAlign: 'start',
      textDecoration: 'none',
      wordWrap: 'break-word',
      backgroundColor: token.tooltipBg,
      borderRadius: token.tooltipBorderRadius,
      boxShadow: token.boxShadowSecondary
    }
  })
}

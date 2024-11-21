import { resetComponent } from '@/utils/style'
import { css } from '@emotion/css'
import type { AliasToken } from '@starry-ui/theme'

export interface PopoverToken extends AliasToken {
  componentCls: string
  popoverBg: string
  popoverColor: string
  popoverPadding: number
}

export function PopoverTokenFactory(
  token: AliasToken,
  componentCls: string
): PopoverToken {
  return {
    ...token,
    componentCls,
    popoverBg: token.colorBgElevated,
    popoverColor: token.colorText,
    popoverPadding: 12 // Huh?
  }
}

export function genPopoverStyle(token: PopoverToken) {
  return css({
    // Content
    zIndex: token.zIndexPopupBase + 30,

    [`.${token.componentCls}Inner`]: {
      ...resetComponent(token),
      position: 'relative',
      minWidth: 177, // magic
      padding: token.popoverPadding,
      textAlign: 'start',
      textDecoration: 'none',
      wordWrap: 'break-word',
      backgroundColor: token.popoverBg,
      backgroundClip: 'padding-box',
      borderRadius: token.borderRadiusLG,
      boxShadow: token.boxShadowSecondary,

      [`.${token.componentCls}Title`]: {
        marginBottom: token.marginXS,
        color: token.colorTextHeading,
        fontWeight: token.fontWeightStrong
      },

      [`.${token.componentCls}InnerContent`]: {
        color: token.popoverColor
      }
    },

    [`.${token.componentCls}Arrow`]: {
      fill: token.popoverBg
    }
  })
}

import { getFocusStyle, resetComponent } from '@/utils/style'
import { css } from '@emotion/css'
import type { AliasToken } from '@starry-ui/theme'

export interface ModalToken extends AliasToken {
  componentCls: string
  modalBodyPadding: number
  modalHeaderBg: string
  modalHeaderPadding: string
  modalHeaderBorderWidth: number
  modalHeaderBorderStyle: string
  modalHeaderTitleLineHeight: number
  modalHeaderTitleFontSize: number
  modalHeaderBorderColorSplit: string
  modalHeaderCloseSize: number
  modalContentBg: string
  modalHeadingColor: string
  modalCloseColor: string
  modalCloseBtnSize: number
  modalFooterBg: string
  modalFooterBorderColorSplit: string
  modalFooterBorderStyle: string
  modalFooterPaddingVertical: number
  modalFooterPaddingHorizontal: number
  modalFooterBorderWidth: number
  modalConfirmTitleFontSize: number
  modalIconHoverColor: string
  modalConfirmIconSize: number
}

export function modalTokenFactory(
  token: AliasToken,
  componentCls: string
): ModalToken {
  const headerPaddingVertical = token.padding
  const headerFontSize = token.fontSizeHeading5
  const headerLineHeight = token.lineHeightHeading5

  return {
    componentCls,
    ...token,
    modalBodyPadding: token.paddingLG,
    modalHeaderBg: token.colorBgElevated,
    modalHeaderPadding: `${headerPaddingVertical}px ${token.paddingLG}px`,
    modalHeaderBorderWidth: token.lineWidth,
    modalHeaderBorderStyle: token.lineType,
    modalHeaderTitleLineHeight: headerLineHeight,
    modalHeaderTitleFontSize: headerFontSize,
    modalHeaderBorderColorSplit: token.colorSplit,
    modalHeaderCloseSize:
      headerLineHeight * headerFontSize + headerPaddingVertical * 2,
    modalContentBg: token.colorBgElevated,
    modalHeadingColor: token.colorTextHeading,
    modalCloseColor: token.colorTextDescription,
    modalFooterBg: 'transparent',
    modalFooterBorderColorSplit: token.colorSplit,
    modalFooterBorderStyle: token.lineType,
    modalFooterPaddingVertical: token.paddingXS,
    modalFooterPaddingHorizontal: token.padding,
    modalFooterBorderWidth: token.lineWidth,
    modalConfirmTitleFontSize: token.fontSizeLG,
    modalIconHoverColor: token.colorIconHover,
    modalConfirmIconSize: token.fontSize * token.lineHeight,
    modalCloseBtnSize: token.controlHeightLG * 0.55
  }
}

export function genMaskStyle(token: ModalToken) {
  return css({
    position: 'fixed',
    inset: 0,
    height: '100%',
    backgroundColor: token.colorBgMask,
    zIndex: token.zIndexPopupBase,
    display: 'grid',
    alignItems: 'start',
    justifyContent: 'center',
    overflowY: 'auto',
    paddingBottom: token.paddingLG
  })
}

export function genModalStyle(token: ModalToken) {
  return css({
    // Wrap
    zIndex: token.zIndexPopupBase,
    position: 'fixed',
    inset: 0,
    outline: 0,
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',

    [`& .${token.componentCls}Modal`]: {
      ...resetComponent(token),
      position: 'relative',
      top: 100,
      width: 'auto',
      maxWidth: `calc(100% - ${token.margin * 2}px)`,
      margin: '0 auto',
      paddingBottom: token.paddingLG,
      pointerEvents: 'none'
    },

    [`& .${token.componentCls}Content`]: {
      padding: `${token.paddingMD}px ${token.paddingContentHorizontalLG}px`,
      backgroundColor: token.modalContentBg,
      backgroundClip: 'padding-box',
      border: 0,
      borderRadius: token.borderRadiusLG,
      boxShadow: token.boxShadowSecondary,
      pointerEvents: 'auto'
    },

    [`& .${token.componentCls}Close`]: {
      position: 'absolute',
      top: (token.modalHeaderCloseSize - token.modalCloseBtnSize) / 2,
      insetInlineEnd:
        (token.modalHeaderCloseSize - token.modalCloseBtnSize) / 2,
      zIndex: token.zIndexPopupBase + 10,
      padding: 0,
      color: token.modalCloseColor,
      fontWeight: token.fontWeightStrong,
      lineHeight: 1,
      textDecoration: 'none',
      background: 'transparent',
      borderRadius: token.borderRadiusSM,
      width: token.modalConfirmIconSize,
      height: token.modalConfirmIconSize,
      border: 0,
      outline: 0,
      cursor: 'pointer',
      transition: `color 200ms, background-color 200ms`,
      '&:hover': {
        color: token.modalIconHoverColor,
        backgroundColor: token.colorFillContent,
        textDecoration: 'none'
      },
      ...getFocusStyle(token)
    },

    [`& .${token.componentCls}Header`]: {
      marginBottom: token.marginXS,
      color: token.colorText,
      background: token.modalHeaderBg,
      borderRadius: `${token.borderRadiusLG}px ${token.borderRadiusLG}px 0 0`,

      [`.${token.componentCls}Title`]: {
        margin: 0,
        color: token.modalHeadingColor,
        fontWeight: token.fontWeightStrong,
        fontSize: token.modalHeaderTitleFontSize,
        lineHeight: token.modalHeaderTitleLineHeight,
        wordBreak: 'break-word'
      }
    },

    [`& .${token.componentCls}Body`]: {
      fontSize: token.fontSize,
      lineHeight: token.lineHeight,
      wordWrap: 'break-word'
    },

    [`& .${token.componentCls}Footer`]: {
      textAlign: 'right',
      background: token.modalFooterBg,
      marginTop: token.marginSM,

      ['button + button']: {
        marginBottom: 0,
        marginInlineStart: token.marginXS
      }
    }
  })
}

export function genModalCenterStyle(token: ModalToken) {
  return css({
    textAlign: 'center',
    '&::before': {
      display: 'inline-block',
      width: 0,
      height: '100%',
      verticalAlign: 'middle',
      content: '""'
    },
    [`& .${token.componentCls}Modal`]: {
      top: 0,
      display: 'inline-block',
      paddingBottom: 0,
      textAlign: 'start',
      verticalAlign: 'middle'
    }
  })
}

export function genFullScreenStyle(token: ModalToken) {
  return css({
    [`& .${token.componentCls}Modal`]: {
      top: 0,
      maxWidth: '100%',
      height: '100%',
      margin: 0,
      paddingBottom: 0
    },
    [`& .${token.componentCls}Content`]: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      boxSizing: 'border-box'
    },
    [`& .${token.componentCls}Body`]: {
      flex: 1,
      overflowY: 'auto'
    }
  })
}

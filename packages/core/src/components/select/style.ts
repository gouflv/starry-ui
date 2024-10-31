import { resetComponent, resetIcon, textEllipsis } from '@/utils/style'
import { css } from '@emotion/css'
import type { CSSObject } from '@emotion/css/create-instance'
import type { AliasToken } from '@starry/theme'

export interface SelectToken extends AliasToken {
  rootPrefixCls: string
  inputPaddingHorizontalBase: number
}

export function genTriggerStyle(token: SelectToken) {
  const selectHeightWithoutBorder = token.controlHeight - token.lineWidth * 2
  const selectionItemPadding = Math.ceil(token.fontSize * 1.25)

  return css({
    ...resetComponent(token),
    position: 'relative',
    display: 'inline-flex',
    backgroundColor: token.colorBgContainer,
    border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    outline: 'none',

    '&:hover, &:focus, &:active, &[data-state="open"]': {
      borderColor: token.colorPrimaryHover,
      boxShadow: `0 0 0 ${token.controlOutlineWidth}px ${token.controlOutline}`
    },

    // Selection
    [`.${token.rootPrefixCls}Selection`]: {
      flex: 1,
      padding: 0,
      paddingInlineEnd: selectionItemPadding,
      lineHeight: `${selectHeightWithoutBorder}px`,
      textAlign: 'left',
      transition: 'all 0.3s',
      userSelect: 'none',
      '&:after': {
        display: 'inline-block',
        width: 0,
        visibility: 'hidden',
        content: '"\\a0"'
      }
    },

    [`&[data-state="open"] .${token.rootPrefixCls}Selection`]: {
      color: token.colorTextPlaceholder
    },

    // Arrow
    [`.${token.rootPrefixCls}Arrow`]: {
      ...resetIcon(),
      position: 'absolute',
      top: '50%',
      insetInlineStart: 'auto',
      insetInlineEnd: token.inputPaddingHorizontalBase,
      height: token.fontSizeIcon,
      marginTop: -token.fontSizeIcon / 2,
      color: token.colorTextQuaternary,
      fontSize: token.fontSizeIcon,
      lineHeight: 1,
      textAlign: 'center',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center'
    },

    ...getSizeStyle(token)
  })
}

function getSizeStyle(token: SelectToken): CSSObject {
  return {
    padding: `0 ${token.inputPaddingHorizontalBase}px`,
    fontSize: token.fontSize,
    borderRadius: token.borderRadius
  }
}

export function genViewportStyle(token: SelectToken) {
  return css({
    ...resetComponent(token),
    marginTop: token.paddingXXS,
    padding: token.paddingXXS,
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    outline: 'none',
    boxShadow: token.boxShadowSecondary
  })
}

export function genItemStyle(token: SelectToken) {
  return css({
    position: 'relative',
    display: 'block',
    minHeight: token.controlHeight,
    padding: `${(token.controlHeight - token.fontSize * token.lineHeight) / 2}px ${token.controlPaddingHorizontal}px`,
    boxSizing: 'border-box',

    color: token.colorText,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    ...textEllipsis,

    borderRadius: token.borderRadiusSM,
    cursor: 'pointer',
    transition: 'background 0.3s ease',

    userSelect: 'none',
    '&:hover, &:focus-visible': {
      outline: 'none',
      backgroundColor: token.controlItemBgHover
    },

    '&[data-state="disabled"]': {
      color: token.colorTextDisabled,
      cursor: 'not-allowed'
    },

    '&[data-state="checked"]': {
      color: token.colorText,
      fontWeight: token.fontWeightStrong,
      backgroundColor: token.controlItemBgActive
    }
  })
}

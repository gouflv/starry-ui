import type { SizeType } from '@/types'
import { resetComponent, resetIcon, textEllipsis } from '@/utils/style'
import { css } from '@emotion/css'
import type { CSSObject } from '@emotion/css/create-instance'
import type { AliasToken } from '@starry/theme'

export interface SelectToken extends AliasToken {
  rootPrefixCls: string
  inputPaddingHorizontalBase: number
}

export function genSelectionStyle(token: SelectToken) {
  return css({
    ...resetComponent(token),
    position: 'relative',
    display: 'inline-flex',
    backgroundColor: token.colorBgContainer,
    border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
    outline: 'none',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',

    [[
      '&:not([data-disabled]):hover',
      '&:not([data-disabled]):focus',
      '&:not([data-disabled]):focus-within',
      '&:active',
      '&[data-state="open"]'
    ].join(',')]: {
      borderColor: token.colorPrimaryHover,
      boxShadow: `0 0 0 ${token.controlOutlineWidth}px ${token.controlOutline}`
    },

    [`.${token.rootPrefixCls}Text`]: {
      ...getTextStyle(token)
    },

    [`.${token.rootPrefixCls}Placeholder`]: {
      ...getTextStyle(token),
      color: token.colorTextPlaceholder
    },

    [`.${token.rootPrefixCls}Input`]: {
      flex: 1,
      margin: 0,
      padding: 0,
      border: 'none',
      backgroundColor: 'transparent',
      outline: 'none',
      color: 'inherit',
      fontSize: 'inherit',
      appearance: 'none'
    },

    [[
      `&[data-state="open"] .${token.rootPrefixCls}Text`,
      `&[data-state="open"] .${token.rootPrefixCls}Input`
    ].join(',')]: {
      color: token.colorTextPlaceholder
    },

    // Arrow
    [`.${token.rootPrefixCls}Arrow`]: {
      ...resetIcon(),
      position: 'absolute',
      top: '50%',
      display: 'flex',
      alignItems: 'center',
      insetInlineStart: 'auto',
      insetInlineEnd: token.inputPaddingHorizontalBase,
      height: token.fontSizeIcon,
      marginTop: -token.fontSizeIcon / 2,
      color: token.colorTextQuaternary,
      fontSize: token.fontSizeIcon,
      lineHeight: 1,
      textAlign: 'center',
      pointerEvents: 'none'
    }
  })
}

function getTextStyle(token: SelectToken): CSSObject {
  return {
    flex: 1,
    padding: 0,
    transition: 'color 0.5s',
    cursor: 'pointer',
    userSelect: 'none',
    ...textEllipsis,
    '&::after': {
      display: 'inline-block',
      width: 0,
      visibility: 'hidden',
      content: '"\\a0"'
    }
  }
}

export function genSizeStyle(token: SelectToken, size: SizeType) {
  if (size === 'small') {
    return css(
      getSizeStyle({ ...token, controlHeight: token.controlHeightSM }, size)
    )
  }

  if (size === 'large') {
    return css(
      getSizeStyle(
        {
          ...token,
          controlHeight: token.controlHeightLG,
          fontSize: token.fontSizeLG
        },
        size
      )
    )
  }

  return css(getSizeStyle(token, size))
}

function getSizeStyle(token: SelectToken, size: SizeType): CSSObject {
  const { controlHeight, borderRadius, fontSize } = token
  const selectHeightWithoutBorder = controlHeight - token.lineWidth * 2
  const selectionItemPadding = Math.ceil(token.fontSize * 1.25)
  const sectionPaddingInlineEnd =
    size === 'small' ? token.fontSize * 1.5 : selectionItemPadding

  return {
    padding: `0 ${token.inputPaddingHorizontalBase}px`,
    fontSize: fontSize,
    borderRadius: borderRadius,
    // Selection
    [[
      `.${token.rootPrefixCls}Text`,
      `.${token.rootPrefixCls}Placeholder`,
      `.${token.rootPrefixCls}Input`
    ].join(',')]: {
      padding: 0,
      paddingInlineEnd: sectionPaddingInlineEnd,
      height: `${selectHeightWithoutBorder}px`,
      lineHeight: `${selectHeightWithoutBorder}px`
    }
  }
}

export function genViewportStyle(token: SelectToken) {
  return css({
    ...resetComponent(token),
    marginTop: token.paddingXXS,
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    outline: 'none',
    boxShadow: token.boxShadowSecondary
  })
}

export function genScrollAreaStyle(token: SelectToken) {
  return css({
    padding: token.paddingXXS,
    overflowY: 'auto',
    '-webkit-overflow-scrolling': 'touch'
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
    '&:hover, &[data-highlighted]': {
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

export function genBorderLessStyle(token: SelectToken) {
  return css({
    borderColor: 'transparent !important',
    backgroundColor: 'transparent !important',
    boxShadow: 'none !important'
  })
}

export function genLoadingStyle(token: SelectToken) {
  return css({
    boxSizing: 'border-box',
    padding: `${(token.controlHeight - token.fontSize * token.lineHeight) / 2}px ${token.controlPaddingHorizontal}px`,
    height: token.controlHeight,
    color: token.colorPrimaryText
  })
}

export function genEmptyStyle(token: SelectToken) {
  return css({
    boxSizing: 'border-box',
    padding: `${(token.controlHeight - token.fontSize * token.lineHeight) / 2}px ${token.controlPaddingHorizontal}px`,
    height: token.controlHeight,
    color: token.colorTextDisabled,
    fontSize: token.fontSize,
    userSelect: 'none'
  })
}

export function genDisabledStyle(token: SelectToken) {
  return css({
    cursor: 'not-allowed',
    borderColor: token.colorBorder,
    color: token.colorTextDisabled,
    backgroundColor: token.colorBgContainerDisabled,
    boxShadow: 'none'
  })
}

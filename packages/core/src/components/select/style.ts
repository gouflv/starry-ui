import type { SizeType } from '@/types'
import { resetComponent, resetIcon, textEllipsis } from '@/utils/style'
import { css } from '@emotion/css'
import type { CSSObject } from '@emotion/css/create-instance'
import type { AliasToken } from '@starry-ui/theme'

export interface SelectToken extends AliasToken {
  rootPrefixCls: string
  inputPaddingHorizontalBase: number
}

export const genSelectionStyle = (token: SelectToken) => {
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

    // Text
    [`.${token.rootPrefixCls}Text`]: {
      ...getTextStyle(token),
      '&.placeholder': {
        color: token.colorTextPlaceholder
      }
    },

    [`&[data-state="open"] .${token.rootPrefixCls}Text`]: {
      color: token.colorTextPlaceholder
    },

    // Input
    '&.show-search': {
      cursor: 'text'
    },
    [`.${token.rootPrefixCls}Input`]: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      insetInline: token.inputPaddingHorizontalBase,

      input: {
        margin: 0,
        padding: 0,
        minWidth: 0,
        width: '100%',
        border: 'none',
        backgroundColor: 'transparent',
        outline: 'none',
        appearance: 'none',
        cursor: 'auto',
        color: 'inherit',
        fontSize: 'inherit'
      }
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

const getTextStyle = (token: SelectToken): CSSObject => ({
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
})

export const genSizeStyle = (token: SelectToken, size: SizeType) => {
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

const getSizeStyle = (token: SelectToken, size: SizeType): CSSObject => {
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
    [`.${token.rootPrefixCls}Text`]: {
      padding: 0,
      paddingInlineEnd: sectionPaddingInlineEnd,
      height: selectHeightWithoutBorder,
      lineHeight: `${selectHeightWithoutBorder}px`
    },
    [`.${token.rootPrefixCls}Input`]: {
      input: {
        height: selectHeightWithoutBorder
      }
    }
  }
}

export const genViewportStyle = (token: SelectToken) =>
  css({
    ...resetComponent(token),
    marginTop: token.paddingXXS,
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    outline: 'none',
    boxShadow: token.boxShadowSecondary
  })

export const genScrollAreaStyle = (token: SelectToken) =>
  css({
    padding: token.paddingXXS,
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch'
  })

export const genItemStyle = (token: SelectToken) =>
  css({
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

export const genBorderLessStyle = (token: SelectToken) =>
  css({
    borderColor: 'transparent !important',
    backgroundColor: 'transparent !important',
    boxShadow: 'none !important'
  })

export const genLoadingStyle = (token: SelectToken) =>
  css({
    boxSizing: 'border-box',
    padding: `${(token.controlHeight - token.fontSize * token.lineHeight) / 2}px ${token.controlPaddingHorizontal}px`,
    height: token.controlHeight,
    color: token.colorPrimaryText
  })

export const genEmptyStyle = (token: SelectToken) =>
  css({
    boxSizing: 'border-box',
    padding: `${(token.controlHeight - token.fontSize * token.lineHeight) / 2}px ${token.controlPaddingHorizontal}px`,
    height: token.controlHeight,
    color: token.colorTextDisabled,
    fontSize: token.fontSize,
    userSelect: 'none'
  })

export const genDisabledStyle = (token: SelectToken) =>
  css({
    cursor: 'not-allowed',
    borderColor: token.colorBorder,
    color: token.colorTextDisabled,
    backgroundColor: token.colorBgContainerDisabled,
    boxShadow: 'none',
    '&.show-search': {
      cursor: 'not-allowed',
      '& .${token.rootPrefixCls}Input': {
        cursor: 'not-allowed'
      }
    }
  })

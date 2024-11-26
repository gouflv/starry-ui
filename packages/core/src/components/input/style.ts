import { resetComponent } from '@/utils/style'
import { css } from '@emotion/css'
import type { CSSObject } from '@emotion/css/create-instance'
import type { AliasToken } from '@starry-ui/theme'

export interface InputToken extends AliasToken {
  componentCls: string
  inputAffixPadding: number
  inputPaddingVertical: number
  inputPaddingVerticalLG: number
  inputPaddingVerticalSM: number
  inputPaddingHorizontal: number
  inputPaddingHorizontalLG: number
  inputPaddingHorizontalSM: number
  inputBorderHoverColor: string
  inputBorderActiveColor: string
}

export const InputTokenFactory = (
  token: AliasToken,
  componentCls: string
): InputToken => {
  return {
    ...token,
    componentCls,
    inputAffixPadding: token.paddingXXS,
    inputPaddingVertical: Math.max(
      Math.round(
        ((token.controlHeight - token.fontSize * token.lineHeight) / 2) * 10
      ) /
        10 -
        token.lineWidth,
      3
    ),
    inputPaddingVerticalLG:
      Math.ceil(
        ((token.controlHeightLG - token.fontSizeLG * token.lineHeightLG) / 2) *
          10
      ) /
        10 -
      token.lineWidth,
    inputPaddingVerticalSM: Math.max(
      Math.round(
        ((token.controlHeightSM - token.fontSize * token.lineHeight) / 2) * 10
      ) /
        10 -
        token.lineWidth,
      0
    ),
    inputPaddingHorizontal: token.paddingSM - token.lineWidth,
    inputPaddingHorizontalSM: token.paddingXS - token.lineWidth,
    inputPaddingHorizontalLG: token.controlPaddingHorizontal - token.lineWidth,
    inputBorderHoverColor: token.colorPrimaryHover,
    inputBorderActiveColor: token.colorPrimaryHover
  }
}

export const genInputStyle = (token: InputToken) => {
  return css({
    ...resetComponent(token),
    ...getBasicInputStyle(token),
    ...getPlaceholderStyle(token.colorTextPlaceholder)
  })
}

export const genWrapperStyle = (token: InputToken) => {
  const wrapCls = `&.${token.componentCls}Wrap`
  return css({
    ...getBasicInputStyle(token),
    display: 'inline-flex',

    [`.${token.componentCls}Input`]: {
      padding: 0,
      fontSize: 'inherit',
      border: 'none',
      borderRadius: 0,
      outline: 'none',
      '&:focus': {
        boxShadow: 'none !important'
      }
    },
    '&::before': {
      width: 0,
      visibility: 'hidden',
      content: '"\\a0"'
    },

    // suffix & prefix
    [`.${token.componentCls}Suffix, .${token.componentCls}Prefix`]: {
      display: 'flex',
      flex: 'none',
      alignItems: 'center',

      '> *:not(:last-child)': {
        marginInlineEnd: token.paddingXS
      }
    },
    [`.${token.componentCls}Suffix`]: {
      marginInlineStart: token.inputAffixPadding
    },
    [`.${token.componentCls}Prefix`]: {
      marginInlineEnd: token.inputAffixPadding
    },

    // password
    [`.${token.componentCls}PasswordIcon`]: {
      color: token.colorIcon,
      cursor: 'pointer',
      transition: `all 300ms`,
      '&:hover': {
        color: token.colorIconHover
      }
    },

    ...getAllowClearStyle(token),

    // state
    [`${wrapCls}-disabled`]: {
      ...getDisabledStyle(token),
      [`.${token.componentCls}Input`]: {
        ...getDisabledStyle(token),
        backgroundColor: 'transparent'
      }
    },
    [`${wrapCls}:not(${wrapCls}-disabled):hover`]: {
      ...getHoverStyle(token)
    },
    [`${wrapCls}:focus-within, ${wrapCls}-focus`]: {
      ...getActiveStyle(token)
    },
    [`${wrapCls}-lg`]: {
      ...getInputLargeStyle(token)
    },
    [`${wrapCls}-sm`]: {
      ...getInputSmallStyle(token)
    }
  })
}

const getBasicInputStyle = (token: InputToken): CSSObject => ({
  position: 'relative',
  display: 'inline-block',
  width: '100%',
  minWidth: 0,
  padding: `${token.inputPaddingVertical}px ${token.inputPaddingHorizontal}px`,
  color: token.colorText,
  fontSize: token.fontSize,
  lineHeight: token.lineHeight,
  backgroundColor: token.colorBgContainer,
  backgroundImage: 'none',
  borderWidth: token.lineWidth,
  borderStyle: token.lineType,
  borderColor: token.colorBorder,
  borderRadius: token.borderRadius,
  transition: `all 200ms`
})

//
// size

const getInputLargeStyle = (token: InputToken): CSSObject => {
  const {
    inputPaddingVerticalLG,
    fontSizeLG,
    lineHeightLG,
    borderRadiusLG,
    inputPaddingHorizontalLG
  } = token

  return {
    padding: `${inputPaddingVerticalLG}px ${inputPaddingHorizontalLG}px`,
    fontSize: fontSizeLG,
    lineHeight: lineHeightLG,
    borderRadius: borderRadiusLG
  }
}

const getInputSmallStyle = (token: InputToken): CSSObject => ({
  padding: `${token.inputPaddingVerticalSM}px ${token.controlPaddingHorizontalSM - 1}px`,
  borderRadius: token.borderRadiusSM
})

//
// state

const getHoverStyle = (token: InputToken): CSSObject => ({
  borderColor: token.inputBorderHoverColor,
  borderInlineEndWidth: token.lineWidth
})

const getActiveStyle = (token: InputToken) => ({
  borderColor: token.inputBorderHoverColor,
  boxShadow: `0 0 0 ${token.controlOutlineWidth}px ${token.controlOutline}`,
  borderInlineEndWidth: token.lineWidth,
  outline: 0
})

const getDisabledStyle = (token: InputToken): CSSObject => ({
  color: token.colorTextDisabled,
  backgroundColor: token.colorBgContainerDisabled,
  borderColor: token.colorBorder,
  boxShadow: 'none',
  cursor: 'not-allowed',
  opacity: 1,
  '&:hover': {
    ...getHoverStyle({ ...token, inputBorderHoverColor: token.colorBorder })
  }
})

const getPlaceholderStyle = (color: string): CSSObject => ({
  // Firefox
  '&::-moz-placeholder': {
    opacity: 1
  },
  '&::placeholder': {
    color,
    userSelect: 'none' // https://github.com/ant-design/ant-design/pull/32639
  },
  '&:placeholder-shown': {
    textOverflow: 'ellipsis'
  }
})

const getAllowClearStyle = (token: InputToken): CSSObject => {
  const { componentCls } = token
  return {
    [`.${componentCls}ClearIcon`]: {
      margin: 0,
      color: token.colorTextQuaternary,
      fontSize: token.fontSizeIcon,
      verticalAlign: -1,
      cursor: 'pointer',
      transition: `color 300ms`,
      lineHeight: 1,
      '&:hover': {
        color: token.colorTextTertiary
      },
      '&:active': {
        color: token.colorText
      },
      '&-hidden': {
        visibility: 'hidden'
      },
      '&-has-suffix': {
        margin: `0 ${token.inputAffixPadding}px`
      }
    }
  }
}

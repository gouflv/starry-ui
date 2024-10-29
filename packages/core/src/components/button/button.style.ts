import type { SizeType } from '@/types'
import { css } from '@emotion/css'
import type { CSSObject } from '@emotion/css/create-instance'
import type { AliasToken } from '@starry/theme'
import type { ButtonType } from './types'

export const genButtonSharedStyle = (token: AliasToken) =>
  css({
    // Positioning
    position: 'relative',
    display: 'inline-block',

    // Background
    backgroundImage: 'none',
    backgroundColor: 'transparent',

    // Border
    outline: 'none',
    border: `${token.lineWidth}px ${token.lineType} transparent`,

    // Text
    color: token.colorText,
    fontWeight: 400,
    lineHeight: token.lineHeight,
    whiteSpace: 'nowrap',
    textAlign: 'center',

    // User interaction
    userSelect: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out'
  })

const getHoverActiveStyle = (
  token: AliasToken,
  hover: CSSObject,
  active: CSSObject
) => ({
  '&:hover': hover,
  '&:active': active
})

//
// Type

const getSolidDisabledStyle = (token: AliasToken) => ({
  '&[disabled]': {
    cursor: 'not-allowed',
    borderColor: token.colorBorder,
    color: token.colorTextDisabled,
    backgroundColor: token.colorBgContainerDisabled,
    boxShadow: 'none'
  }
})

const getPureDisabledStyle = (token: AliasToken) => ({
  '&[disabled]': {
    cursor: 'not-allowed',
    color: token.colorTextDisabled
  }
})

// Type: default
const getDefaultStyle = (token: AliasToken) =>
  css({
    backgroundColor: token.colorBgContainer,
    borderColor: token.colorBorder,
    ...getHoverActiveStyle(
      token,
      {
        color: token.colorPrimaryHover,
        borderColor: token.colorPrimaryHover
      },
      {
        color: token.colorPrimaryActive,
        borderColor: token.colorPrimaryActive
      }
    ),
    ...getSolidDisabledStyle(token),
    '&.danger': {
      color: token.colorError,
      borderColor: token.colorError,
      ...getHoverActiveStyle(
        token,
        {
          color: token.colorErrorHover,
          borderColor: token.colorErrorHover
        },
        {
          color: token.colorErrorActive,
          borderColor: token.colorErrorActive
        }
      ),
      ...getSolidDisabledStyle(token)
    }
  })

// Type: primary
const genPrimaryStyle = (token: AliasToken) =>
  css({
    color: token.colorTextLightSolid,
    backgroundColor: token.colorPrimary,
    ...getHoverActiveStyle(
      token,
      {
        color: token.colorTextLightSolid,
        backgroundColor: token.colorPrimaryHover
      },
      {
        color: token.colorTextLightSolid,
        backgroundColor: token.colorPrimaryActive
      }
    ),
    ...getSolidDisabledStyle(token),
    '&.danger': {
      backgroundColor: token.colorError,
      ...getHoverActiveStyle(
        token,
        {
          backgroundColor: token.colorErrorHover
        },
        {
          backgroundColor: token.colorErrorActive
        }
      ),
      ...getSolidDisabledStyle(token)
    }
  })

// Type: link
const genLinkStyle = (token: AliasToken) =>
  css({
    color: token.colorLink,
    ...getHoverActiveStyle(
      token,
      {
        color: token.colorLinkHover
      },
      {
        color: token.colorLinkActive
      }
    ),
    ...getPureDisabledStyle(token),
    '&.danger': {
      color: token.colorError,
      ...getHoverActiveStyle(
        token,
        {
          color: token.colorErrorHover
        },
        {
          color: token.colorErrorActive
        }
      ),
      ...getPureDisabledStyle(token)
    }
  })

// Type: text
const genTextStyle = (token: AliasToken) =>
  css({
    border: 'none',
    backgroundColor: 'transparent',
    ...getHoverActiveStyle(
      token,
      {
        color: token.colorText,
        backgroundColor: token.colorBgTextHover
      },
      {
        color: token.colorText,
        backgroundColor: token.colorBgTextActive
      }
    ),
    ...getPureDisabledStyle(token),
    '&.danger': {
      color: token.colorError,
      ...getHoverActiveStyle(
        token,
        {
          color: token.colorErrorHover,
          backgroundColor: token.colorErrorBg
        },
        {
          color: token.colorErrorActive,
          backgroundColor: token.colorErrorBg
        }
      ),
      ...getPureDisabledStyle(token)
    }
  })

export const genButtonTypeStyle = (
  token: AliasToken,
  type: ButtonType = 'default'
) => {
  if (type === 'primary') return genPrimaryStyle(token)
  if (type === 'link') return genLinkStyle(token)
  if (type === 'text') return genTextStyle(token)
  return getDefaultStyle(token)
}

//
// Shape

// TODO: Implement shape styles
const getCircularStyle = (token: AliasToken): CSSObject => ({
  minWidth: token.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: '50%'
})

const getRoundStyle = (token: AliasToken): CSSObject => ({
  borderRadius: token.controlHeight,
  paddingInlineStart: token.controlHeight / 2,
  paddingInlineEnd: token.controlHeight / 2
})

export const genButtonShapeStyle = (token: AliasToken, shape: string) => {
  return css(
    shape === 'circle'
      ? getCircularStyle(token)
      : shape === 'round'
        ? getRoundStyle(token)
        : {}
  )
}

//
// Size

const getSizeBaseStyle = (token: AliasToken): CSSObject => {
  const {
    controlHeight,
    fontSize,
    lineHeight,
    lineWidth,
    borderRadius,
    paddingContentHorizontal
  } = token

  const paddingVertical = Math.max(
    0,
    (controlHeight - fontSize * lineHeight) / 2 - lineWidth
  )
  const paddingHorizontal = paddingContentHorizontal - lineWidth

  return {
    fontSize,
    height: controlHeight,
    padding: `${paddingVertical}px ${paddingHorizontal}px`,
    borderRadius
  }
}

const getSizeMiddleStyle = (token: AliasToken) => getSizeBaseStyle(token)

const getSizeSmallStyle = (token: AliasToken) =>
  getSizeBaseStyle({
    ...token,
    controlHeight: token.controlHeightSM,
    padding: token.paddingXS,
    paddingContentHorizontal: token.paddingContentHorizontalSM,
    borderRadius: token.borderRadiusSM
  })

const getSizeLargeStyle = (token: AliasToken) =>
  getSizeBaseStyle({
    ...token,
    controlHeight: token.controlHeightLG,
    padding: token.paddingLG,
    paddingContentHorizontal: token.paddingContentHorizontalLG,
    borderRadius: token.borderRadiusLG
  })

export const genButtonSizeStyle = (
  token: AliasToken,
  size: SizeType,
  iconOnly: boolean
) => {
  return css({
    ...(size === 'small'
      ? getSizeSmallStyle(token)
      : size === 'large'
        ? getSizeLargeStyle(token)
        : getSizeMiddleStyle(token)),
    ...(iconOnly
      ? {
          width: token.controlHeight,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          '> span': {
            transform: 'scale(1.143)'
          }
        }
      : {})
  })
}

export const genButtonBlockStyle = () =>
  css({
    width: '100%'
  })

export const genButtonLoadingStyle = (token: AliasToken) =>
  css({
    opacity: 0.6,
    cursor: 'default'
  })

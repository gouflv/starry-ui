import { getOperationUnitStyle } from '@/utils/style'
import { css } from '@emotion/css'
import type { AliasToken } from '@starry-ui/theme'
import type { EllipsisType } from './Text'

export interface TextToken extends AliasToken {
  componentCls: string
}

export const genTextStyle = (token: TextToken) => {
  return css({
    color: token.colorText,
    wordBreak: 'break-word',
    lineHeight: token.lineHeight,

    [`&.${token.componentCls}--primary`]: {
      color: token.colorPrimaryText
    },
    [`&.${token.componentCls}--secondary`]: {
      color: token.colorTextDescription
    },
    [`&.${token.componentCls}--success`]: {
      color: token.colorSuccessText
    },
    [`&.${token.componentCls}--warning`]: {
      color: token.colorWarningText
    },
    [`&.${token.componentCls}--danger`]: {
      color: token.colorErrorText,
      'a&:active, a&:focus': {
        color: token.colorErrorActive
      },
      'a&:hover': {
        color: token.colorErrorHover
      }
    },
    [`&.${token.componentCls}--disabled`]: {
      color: token.colorTextDisabled,
      cursor: 'not-allowed',
      userSelect: 'none'
    }
  })
}

export const genEllipsisStyle = (token: TextToken, { rows }: EllipsisType) => {
  return css({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': `${rows}`,
    lineHeight: token.lineHeight
  })
}

export const getLinkStyle = (token: TextToken) =>
  css({
    'a&, a': {
      ...getOperationUnitStyle(token),
      textDecoration: token.linkDecoration,
      '&:active, &:focus': {
        color: token.linkHoverDecoration
      },
      [`&[disabled], &.${token.componentCls}--disabled`]: {
        color: token.colorTextDisabled,
        cursor: 'not-allowed',
        '&:active, &:hover': {
          color: token.colorTextDisabled
        },
        '&:active': {
          pointerEvents: 'none'
        }
      }
    }
  })

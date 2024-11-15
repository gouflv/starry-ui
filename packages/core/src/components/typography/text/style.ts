import { css } from '@emotion/css'
import type { AliasToken } from '@starry-ui/theme'
import type { EllipsisType } from './Text'

export interface TextToken extends AliasToken {
  componentCls: string
}

export function genTextStyle(token: TextToken) {
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
      color: token.colorErrorText
    },
    [`&.${token.componentCls}--disabled`]: {
      color: token.colorTextDisabled,
      cursor: 'not-allowed',
      userSelect: 'none'
    }
  })
}

export function genEllipsisStyle(token: TextToken, { rows }: EllipsisType) {
  return css({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': `${rows}`,
    lineHeight: token.lineHeight
  })
}

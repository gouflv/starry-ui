import { css } from '@emotion/css'
import type { AliasToken } from '@starry-ui/theme'

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

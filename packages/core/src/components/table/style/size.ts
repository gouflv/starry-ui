import type { SizeType } from '@/types'
import { css } from '@emotion/css'
import type { TableToken } from '.'

export function genSizeStyle(token: TableToken, size: SizeType) {
  const getStyle = (paddingX: number, paddingY: number, fontSize: number) => {
    return css({
      fontSize,
      'thead > tr > th, tbody > tr > td': {
        padding: `${paddingY}px ${paddingX}px`
      }
    })
  }

  return size === 'middle'
    ? getStyle(
        token.tablePaddingHorizontalMiddle,
        token.tablePaddingVerticalMiddle,
        token.tableFontSizeMiddle
      )
    : size === 'small'
      ? getStyle(
          token.tablePaddingHorizontalSmall,
          token.tablePaddingVerticalSmall,
          token.tableFontSizeSmall
        )
      : ''
}

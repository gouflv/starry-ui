import { css } from '@emotion/css'
import type { TableToken } from '.'

export function genBorderedStyle(token: TableToken) {
  const tableBorder = `${token.lineWidth}px ${token.lineType} ${token.tableBorderColor}`

  return css({
    borderInlineStart: tableBorder,

    table: {
      borderTop: tableBorder,

      [`
        thead > tr > th,
        tbody > tr > td
      `]: {
        borderInlineEnd: tableBorder
      },

      thead: {
        '> tr > th::before': {
          backgroundColor: 'transparent !important'
        }
      }
    }
  })
}

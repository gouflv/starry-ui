import { css } from '@emotion/css'
import type { TableToken } from '.'

export function genBorderedStyle(token: TableToken) {
  const tableBorder = `${token.lineWidth}px ${token.lineType} ${token.tableBorderColor}`

  return css({
    borderInlineStart: tableBorder,

    table: {
      borderTop: tableBorder
    },

    [`
      thead > tr > th,
      tbody > tr > td
    `]: {
      borderInlineEnd: tableBorder
    },

    // hide split line
    thead: {
      '> tr > th::before': {
        backgroundColor: 'transparent !important'
      }
    },

    // FIXME: not work
    [`.${token.componentCls}Cell--fixed-right-first::after`]: {
      borderInlineEnd: tableBorder
    }
  })
}

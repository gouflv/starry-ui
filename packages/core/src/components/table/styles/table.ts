import { resetComponent } from '@/utils/style'
import { css } from '@emotion/css'
import type { TableToken } from '.'

export function genTableStyle(token: TableToken) {
  return css({
    ...resetComponent(token),
    fontSize: token.tableFontSize,
    backgroundColor: token.tableBg,
    borderRadius: `${token.tableRadius}px ${token.tableRadius}px 0 0`,

    table: {
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      borderRadius: `${token.tableRadius}px ${token.tableRadius}px 0 0`
    },

    [`${[
      `${token.componentCls}-thead > tr > th`,
      `${token.componentCls}-tbody > tr > td`
    ].join(',')}`]: {
      position: 'relative',
      padding: `${token.paddingContentVerticalLG}px ${token.tablePaddingHorizontal}px`,
      overflowWrap: 'break-word'
    }
  })
}

export function genTableWrapperStyle(token: TableToken) {
  return css({
    maxWidth: '100%'
  })
}

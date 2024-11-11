import { resetComponent } from '@/utils/style'
import { css } from '@emotion/css'
import type { TableToken } from '.'

export function genTableStyle(token: TableToken) {
  const tableBorder = `${token.lineWidth}px ${token.lineType} ${token.tableBorderColor}`

  return css({
    ...resetComponent(token),
    fontSize: token.tableFontSize,
    backgroundColor: token.tableBg,

    table: {
      width: '100%',
      textAlign: 'start',
      borderCollapse: 'collapse',
      borderSpacing: 0
    },

    // Cell
    [`
      thead > tr > th, 
      tbody > tr > td
    `]: {
      ...resetComponent(token),
      position: 'relative',
      padding: `${token.paddingContentVerticalLG}px ${token.tablePaddingHorizontal}px`,
      overflowWrap: 'break-word'
    },

    // Header
    thead: {
      [`> tr > th`]: {
        position: 'relative',
        color: token.tableHeaderTextColor,
        fontWeight: token.fontWeightStrong,
        textAlign: 'start',
        backgroundColor: token.tableHeaderBg,
        borderBottom: tableBorder,
        transition: 'background 0.3s ease',

        '&[colspan]:not([colspan="1"])': {
          textAlign: 'center'
        },

        '&:not(:last-child)::before': {
          position: 'absolute',
          top: '50%',
          insetInlineEnd: 0,
          transform: 'translateY(-50%)',
          width: 1,
          height: '1.6em',
          backgroundColor: token.tableHeaderCellSplitColor,
          content: '""'
        }
      }
    },

    // Radius
    [`&:not(.${token.componentCls}--bordered)`]: {
      thead: {
        ['tr:first-child']: {
          '> th:first-child': {
            borderStartStartRadius: token.tableRadius
          },
          '> th:last-child': {
            borderStartEndRadius: token.tableRadius
          }
        }
      }
    },

    tbody: {
      '> tr': {
        // Border
        '> td': {
          backgroundColor: token.tableBg,
          borderBottom: tableBorder,
          transition: 'background 0.3s, border-color 0.3s'
        },

        // Hover
        '&:hover > td, &[data-hover] > td': {
          background: token.tableRowHoverBg
        },
        '&:[data-selected]': {
          '> td': {
            background: token.tableSelectedRowBg
          },
          '&:hover > td': {
            background: token.tableSelectedRowHoverBg
          }
        }
      }
    }
  })
}

export function genTableWrapperStyle(token: TableToken) {
  return css({
    maxWidth: '100%'
  })
}

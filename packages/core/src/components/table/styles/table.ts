import { resetComponent } from '@/utils/style'
import { css } from '@emotion/css'
import type { TableToken } from '.'

export function genTableStyle(token: TableToken) {
  const tableBorder = `${token.lineWidth}px ${token.lineType} ${token.tableBorderColor}`

  return css({
    ...resetComponent(token),
    fontSize: token.tableFontSize,
    backgroundColor: token.tableBg,
    borderStartStartRadius: token.tableRadius,
    borderStartEndRadius: token.tableRadius,

    table: {
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      borderRadius: `${token.tableRadius}px ${token.tableRadius}px 0 0`
    },

    [`
      thead > tr > th, 
      tbody > tr > td
    `]: {
      position: 'relative',
      padding: `${token.paddingContentVerticalLG}px ${token.tablePaddingHorizontal}px`,
      overflowWrap: 'break-word'
    },

    // Header
    thead: {
      [`> tr > th`]: {
        position: 'relative',
        borderBottom: tableBorder,
        color: token.tableHeaderTextColor,
        fontWeight: token.fontWeightStrong,
        textAlign: 'start',
        backgroundColor: token.tableHeaderBg,
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
        },
        ['tr:first-child']: {
          '> th:first-child': {
            // borderStartStartRadius: token.tableRadius
          }
        }
      }
    },

    tbody: {
      '> tr': {
        '> td': {
          borderBottom: tableBorder,
          transition: 'background 0.3s, border-color 0.3s'
        },

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

import { css } from '@emotion/css'
import type { TableToken } from '.'

export function genStickyStyle(token: TableToken) {
  return css({
    [`&.${token.componentCls}--sticky-header`]: {
      thead: {
        position: 'sticky',
        top: 0,
        zIndex: token.zIndexTableSticky + 1
      }
    },

    [`.${token.componentCls}Cell--fixed-left, .${token.componentCls}Cell--fixed-right`]:
      {
        position: 'sticky',
        zIndex: token.zIndexTableSticky
      },

    [`.${token.componentCls}Cell--fixed-left-last::after`]: {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: -token.lineWidth,
      width: 30,
      transform: 'translateX(100%)',
      transition: 'box-shadow 0.5s',
      pointerEvents: 'none'
    },

    [`.${token.componentCls}Cell--fixed-right-first::after`]: {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: -token.lineWidth,
      width: 30,
      transform: 'translateX(-100%)',
      transition: 'box-shadow 0.5s',
      pointerEvents: 'none'
    },

    [`&.${token.componentCls}--pinning-left`]: {
      [`.${token.componentCls}Cell--fixed-left-last::after`]: {
        boxShadow: `inset 10px 0 8px -8px ${token.colorSplit}`
      }
    },

    [`&.${token.componentCls}--pinning-right`]: {
      [`.${token.componentCls}Cell--fixed-right-first::after`]: {
        boxShadow: `inset -10px 0 8px -8px ${token.colorSplit}`
      }
    }
  })
}

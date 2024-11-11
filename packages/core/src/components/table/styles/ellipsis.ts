import { textEllipsis } from '@/utils/style'
import { css } from '@emotion/css'
import type { TableToken } from '.'

export function genEllipsisStyle(token: TableToken) {
  return css({
    [`.${token.componentCls}Cell--ellipsis`]: {
      display: 'block',
      wordBreak: 'break-all',
      ...textEllipsis
    }
  })
}

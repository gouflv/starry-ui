import {
  createColumnHelper,
  type CellContext,
  type Column,
  type ColumnDef,
  type ColumnSizingColumnDef,
  type Header,
  type HeaderGroup
} from '@tanstack/vue-table'
import { get, isObject } from 'lodash-es'
import type { CSSProperties } from 'vue'
import type { ColumnType, CombinedColumnType, GroupColumnType } from '../type'

export function normalizeColumnsKey<R>(
  columns: ColumnType<R>[]
): ColumnType<R>[] {
  const keys: Record<string, boolean> = {}
  return columns.map((column) => {
    let mergedKey = String(column.dataIndex || column.key || '_INNER_COLUMN')
    while (keys[mergedKey]) {
      mergedKey = `${mergedKey}_next`
    }
    keys[mergedKey] = true
    return {
      ...column,
      key: mergedKey
    }
  })
}

export function isGroupColumn<R>(
  column: CombinedColumnType<R>
): column is GroupColumnType<R> {
  return 'children' in column
}

export function crateColumnsDef<R>(
  columns: CombinedColumnType<R>[]
): ColumnDef<R, string>[] {
  const helper = createColumnHelper<R>()
  return columns.map((it, index) => {
    if (isGroupColumn(it)) {
      return helper.group({
        header: it.title,
        columns: it.children.map(transformColumns)
      })
    }
    return transformColumns(it, index)
  })
}

function transformColumns<R>(
  column: ColumnType<R>,
  index: number
): ColumnDef<R, string> {
  const helper = createColumnHelper<R>()

  const unsafeRowKey = `_column-${index}`
  const id = String(column.dataIndex || column.key || unsafeRowKey)

  const cellRender = (ctx: CellContext<R, any>) => {
    if (typeof column.customRender === 'function') {
      return column.customRender({
        text: ctx.getValue(),
        record: ctx.row.original,
        index: ctx.row.index,
        column
      })
    }
    const value = ctx.getValue()
    return isObject(value) ? JSON.stringify(value) : value
  }

  const colSize: ColumnSizingColumnDef = {
    size: column.width,
    minSize: column.minWidth,
    maxSize: column.maxWidth
  }

  if (column.dataIndex) {
    return helper.accessor((r) => get(r, column.dataIndex!), {
      id,
      header: column.title,
      cell: cellRender,
      ...colSize,
      meta: { column }
    })
  }

  return helper.display({
    id,
    header: column.title,
    cell: cellRender,
    ...colSize,
    meta: { column }
  })
}

export function flatColumns<R>(
  columns: CombinedColumnType<R>[]
): ColumnType<R>[] {
  return columns.reduce<ColumnType<R>[]>((acc, column) => {
    if (isGroupColumn(column)) {
      return [...acc, ...flatColumns(column.children)]
    }
    return [...acc, column]
  }, [])
}

export function toSizeValue(num?: number | string) {
  if (typeof num === 'number') {
    return `${num}px`
  }
  if (typeof num === 'string') {
    return num
  }
  return 'auto'
}

/**
 * Calculate the colSpan for the header cell
 *
 * @see https://github.com/TanStack/table/issues/5202#issuecomment-2027529717
 */
export function mergeHeaderGroups<R = any>(
  hg: HeaderGroup<R>[]
): HeaderGroup<R>[] {
  if (hg.length === 1) return hg

  const idCache = new Set<string>()

  return hg.map((group, depth, { length: totalDepth }) => {
    return {
      ...group,
      headers: group.headers
        .filter((hd) => !idCache.has(hd.column.id))
        .map((hd: Header<R, any>) => {
          idCache.add(hd.column.id)
          return hd.isPlaceholder
            ? {
                ...hd,
                isPlaceholder: false,
                rowSpan: totalDepth - depth
              }
            : {
                ...hd,
                rowSpan: 1
              }
        })
    }
  })
}

export function getPinningState(column: Column<any>, componentCls: string) {
  const pinned = column.getIsPinned()
  const isLastLeft = pinned === 'left' && column.getIsLastColumn('left')
  const isFirstRight = pinned === 'right' && column.getIsFirstColumn('right')
  return {
    isFirstRight,
    isLastLeft,
    classes: {
      [`${componentCls}Cell--fixed-left`]: pinned === 'left',
      [`${componentCls}Cell--fixed-right`]: pinned === 'right',
      [`${componentCls}Cell--fixed-left-last`]: isLastLeft,
      [`${componentCls}Cell--fixed-right-first`]: isFirstRight
    },
    style: {
      left: pinned === 'left' ? `${column.getStart('left')}px` : undefined,
      right: pinned === 'right' ? `${column.getAfter('right')}px` : undefined
    } satisfies CSSProperties
  }
}

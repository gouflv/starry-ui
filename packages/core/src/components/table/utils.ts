import {
  createColumnHelper,
  type CellContext,
  type ColumnDef,
  type ColumnSizingColumnDef
} from '@tanstack/vue-table'
import { get, isObject } from 'lodash-es'
import type { ColumnType, CombinedColumnType, GroupColumnType } from './types'

export function normalizeColumnsKey<R>(columns: ColumnType<R>[]) {
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
    } satisfies ColumnType<R>
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
    if (column.customRender) {
      return column.customRender({
        text: ctx.getValue(),
        record: ctx.row.original,
        index: ctx.row.index,
        column
      })
    }
    const value = ctx.getValue()
    if (isObject(value)) {
      return JSON.stringify(value)
    }
    return value
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
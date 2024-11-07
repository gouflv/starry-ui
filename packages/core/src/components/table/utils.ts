import { createColumnHelper, type ColumnDef } from '@tanstack/vue-table'
import { get } from 'lodash-es'
import type { ColumnType, GroupColumnType, MergedColumnType } from './types'

export function isGroupColumn<R>(
  column: MergedColumnType<R>
): column is GroupColumnType<R> {
  return 'children' in column
}

export function crateColumnsDef<R>(
  columns: MergedColumnType<R>[]
): ColumnDef<R, string>[] {
  const helper = createColumnHelper<R>()
  return columns.map((it) => {
    if (isGroupColumn(it)) {
      return helper.group({
        header: it.title,
        columns: it.children.map(transformColumns)
      })
    }
    return transformColumns(it)
  })
}

function transformColumns<R>(column: ColumnType<R>): ColumnDef<R, string> {
  const helper = createColumnHelper<R>()
  if (column.dataIndex) {
    return helper.accessor((r) => get(r, column.dataIndex!), {
      id: String(column.dataIndex || column.key || '')
    })
  }
  return helper.display({
    id: String(column.key || '')
  })
}

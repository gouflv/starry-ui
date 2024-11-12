import type { Table as TSTable } from '@tanstack/vue-table'
import { inject, provide, type ComputedRef, type InjectionKey } from 'vue'
import type {
  ColumnType,
  CombinedColumnType,
  DefaultRecordType,
  TableSlots
} from '../types'

export type TableContext<R extends DefaultRecordType = any> = ComputedRef<{
  componentCls: string
  slots: TableSlots<R>
  columns: CombinedColumnType<R>[]
  flattenColumns: ColumnType<R>[]
  table: TSTable<R>
}>

const TableInjectionKey: InjectionKey<TableContext> =
  Symbol('TableInjectionKey')

export function provideTableContext(props: TableContext) {
  provide(TableInjectionKey, props)
}

export function useTableContext() {
  return inject(TableInjectionKey)!
}

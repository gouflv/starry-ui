import type { Table } from '@tanstack/vue-table'
import { inject, provide, type ComputedRef, type InjectionKey } from 'vue'

export type TableContext = ComputedRef<{
  table: Table<any>
}>

const TableInjectionKey: InjectionKey<TableContext> =
  Symbol('TableInjectionKey')

export function provideTableContext(props: TableContext) {
  provide(TableInjectionKey, props)
}

export function useTableContext() {
  return inject(TableInjectionKey)
}

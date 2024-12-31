import { SizeType } from '@/config-provider'
import type { Table as TSTable } from '@tanstack/table-core'
import { inject, provide, Ref, type InjectionKey } from 'vue'
import { TableToken } from './style'
import type { DefaultRecordType, ScrollType } from './types'

export type TableContext<R = DefaultRecordType> = {
  // props
  //
  tableLayout: Ref<'auto' | 'fixed'>
  size: Ref<SizeType>
  scroll: Ref<ScrollType>
  bordered: Ref<boolean>
  emptyText: Ref<string>
  // attrs: any
  // slots: TableSlots<R>

  componentCls: Ref<string>
  tableComponentToken: Ref<TableToken>

  // ui
  //
  tableContainerRef?: Ref<HTMLDivElement | null>
  tableRef?: Ref<HTMLTableElement | null>

  //
  // instance
  table: TSTable<R>
}

const TableInjectionKey: InjectionKey<TableContext> =
  Symbol('TableInjectionKey')

export function provideTableContext(props: TableContext) {
  provide(TableInjectionKey, props)
}

export function injectTableContext() {
  return inject(TableInjectionKey)!
}

export function useTableContext() {
  const context = injectTableContext()

  if (!context) {
    throw new Error('useTableContext() is called without provider.')
  }

  return {}
}

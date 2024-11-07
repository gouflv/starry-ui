import { inject, provide, type InjectionKey } from 'vue'

export type TableContext = {
  api: any
}

const TableInjectionKey: InjectionKey<TableContext> =
  Symbol('TableInjectionKey')

export function provideTableContext(props: TableContext) {
  provide(TableInjectionKey, props)
}

export function useTableContext() {
  return inject(TableInjectionKey)
}

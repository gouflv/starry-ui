<template>
  <TableContainer>
    <TableContent />
  </TableContainer>
</template>

<script lang="ts">
import { useConfig } from '@/config-provider'
import { useToken } from '@/theme/cssinjs'
import { createTable, getCoreRowModel } from '@tanstack/table-core'
import { computed, defineComponent, toRefs } from 'vue'
import { provideTableContext } from './context'
import { tableProps } from './props'
import { tableTokenFactory } from './style'
import TableContainer from './TableContainer'
import TableContent from './TableContent'
import { crateColumnsDef } from './utils'

export default defineComponent({
  name: 'STable',
  inheritAttrs: false,
  props: tableProps(),
  components: {
    TableContainer,
    TableContent,
  },
  setup(props, { slots, emit }) {
    const token = useToken()
    const config = useConfig()
    const componentCls = computed(() => `${config.value.prefixCls}Table`)
    const tableToken = computed(() =>
      tableTokenFactory(token.value, componentCls.value),
    )

    const columnsDef = computed(() => crateColumnsDef(props.columns))

    console.log('createTable')
    const table = createTable({
      getCoreRowModel: getCoreRowModel(),
      state: {},
      onStateChange: (updater) => {},
      columns: columnsDef.value,
      data: props.dataSource,
      renderFallbackValue: null,
      debugTable: true,
    })
    // hack
    // https://github.com/TanStack/table/issues/4358
    table.setOptions((prev) => ({
      ...prev,
      state: {
        ...prev.state,
        ...table.initialState,
      },
    }))

    provideTableContext({
      ...toRefs(props),
      componentCls,
      tableComponentToken: tableToken,
      table,
    })
  },
})
</script>

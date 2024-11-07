<template>
  <div :class="classes.table">
    <table>
      <thead>
        <tr
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
        >
          <th
            v-for="header in headerGroup.headers"
            :key="header.id"
            :colSpan="header.colSpan"
          >
            <FlexRender
              v-if="!header.isPlaceholder"
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in table.getRowModel().rows" :key="row.id">
          <td v-for="cell in row.getVisibleCells()" :key="cell.id">
            <FlexRender
              :render="cell.column.columnDef.cell"
              :props="cell.getContext()"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts" generic="Record extends DefaultRecordType = any">
import { useConfig } from '@/uses/config'
import { cx } from '@emotion/css'
import { useToken } from '@starry/theme'
import { FlexRender, getCoreRowModel, useVueTable } from '@tanstack/vue-table'
import { computed } from 'vue'
import { tableTokenFactory } from './styles'
import { genTableStyle } from './styles/table'
import {
  tablePropTypes,
  type DefaultRecordType,
  type SelectionChangeEvent
} from './types'
import { crateColumnsDef } from './utils'

const props = defineProps(tablePropTypes<Record>())

const emits = defineEmits<{
  change: []
  selectionChange: [e: SelectionChangeEvent<Record>]
}>()

const slots = defineSlots()

const { token } = useToken()
const config = useConfig()

const tableToken = computed(() =>
  tableTokenFactory(token.value, config.value.prefixCls)
)

const classes = computed(() => {
  return {
    table: cx(genTableStyle(tableToken.value))
  }
})

const columns = computed(() => crateColumnsDef(props.columns))

const table = useVueTable({
  get data() {
    return props.dataSource
  },
  get columns() {
    return columns.value
  },
  getCoreRowModel: getCoreRowModel()
})
</script>

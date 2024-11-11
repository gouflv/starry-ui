<template>
  <div ref="containerRef" :class="classes.table" :style="scrollStyle">
    <table ref="tableRef" :style="tableStyle">
      <thead>
        <tr
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
        >
          <th
            v-for="header in headerGroup.headers"
            :key="header.id"
            :colSpan="header.colSpan"
            :style="{
              width: `${header.getSize()}px`,
              ...getPinningState(header.column).style
            }"
            :class="{
              ...getPinningState(header.column).classes
            }"
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
        <tr
          v-for="row in table.getRowModel().rows"
          :key="getRowKey(row.original)"
        >
          <td
            v-for="cell in row.getVisibleCells()"
            :key="cell.id"
            :class="{
              ...getPinningState(cell.column).classes
            }"
            :style="{
              width: `${cell.column.getSize()}px`,
              ...getPinningState(cell.column).style
            }"
          >
            <span
              :class="[
                `${componentCls}Cell-content`,
                {
                  [`${componentCls}Cell--ellipsis`]: isEllipsis(cell.column.id)
                }
              ]"
            >
              <FlexRender
                :render="cell.column.columnDef.cell"
                :props="cell.getContext()"
              />
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts" generic="Record extends DefaultRecordType = any">
import { useConfig } from '@/uses/config'
import { useElementScroll } from '@/uses/dom/useElementScroll'
import { cx } from '@emotion/css'
import { useToken } from '@starry/theme'
import {
  FlexRender,
  getCoreRowModel,
  useVueTable,
  type Column
} from '@tanstack/vue-table'
import { useElementSize } from '@vueuse/core'
import { isNumber } from 'lodash-es'
import { computed, ref, watchEffect, type CSSProperties } from 'vue'
import { provideTableContext } from './context'
import { tableTokenFactory } from './styles'
import { genBorderedStyle } from './styles/bordered'
import { genEllipsisStyle } from './styles/ellipsis'
import { genSizeStyle } from './styles/size'
import { genStickyStyle } from './styles/sticky'
import { genTableStyle } from './styles/table'
import {
  propsType,
  type ColumnType,
  type DefaultRecordType,
  type SelectionChangeEvent
} from './types'
import {
  crateColumnsDef,
  flatColumns,
  normalizeColumnsKey,
  toSizeValue
} from './utils'

const props = defineProps(propsType<Record>())

const emits = defineEmits<{
  change: []
  selectionChange: [e: SelectionChangeEvent<Record>]
}>()

const slots = defineSlots()

const { token } = useToken()

const config = useConfig()

//
// State

const containerRef = ref<HTMLElement>()
const tableRef = ref<HTMLTableElement>()

const flattenColumns = computed(() =>
  normalizeColumnsKey(flatColumns(props.columns))
)

const fixedColumns = computed(() => {
  return {
    left: flattenColumns.value.filter(
      (column) => column.fixed === true || column.fixed === 'left'
    ),
    right: flattenColumns.value.filter((column) => column.fixed === 'right')
  }
})

const shouldScrollX = computed(() => isNumber(props.scroll?.x))
const shouldScrollY = computed(() => isNumber(props.scroll?.y))

const hasFixColumn = computed(
  () =>
    shouldScrollX.value &&
    (fixedColumns.value.left.length || fixedColumns.value.right.length)
)

const fixHeader = computed(() => shouldScrollY.value)

//
// Style

const componentCls = computed(() => `${config.value.prefixCls}Table`)
const tableToken = computed(() =>
  tableTokenFactory(token.value, componentCls.value)
)
const classes = computed(() => {
  return {
    table: cx([
      componentCls.value,
      genTableStyle(tableToken.value),
      genSizeStyle(tableToken.value, props.size),
      genEllipsisStyle(tableToken.value),
      genStickyStyle(tableToken.value),
      ...(props.bordered
        ? [
            `${componentCls.value}--bordered`,
            genBorderedStyle(tableToken.value)
          ]
        : []),
      fixHeader.value && `${componentCls.value}--sticky-header`,
      pinningLeftColumns.value && `${componentCls.value}--pinning-left`,
      pinningRightColumns.value && `${componentCls.value}--pinning-right`
    ])
  }
})

const mergedTableLayout = computed(() => {
  if (props.tableLayout) {
    return props.tableLayout
  }
  if (hasFixColumn.value) {
    return 'fixed'
  }
  if (
    fixHeader.value ||
    flattenColumns.value.some((column) => column.ellipsis)
  ) {
    return 'fixed'
  }
  return 'auto'
})

const scrollStyle = ref<CSSProperties>({})
const tableScrollStyle = ref<CSSProperties>({})
const tableStyle = computed(
  () =>
    ({
      tableLayout: mergedTableLayout.value,
      ...tableScrollStyle.value
    }) as CSSProperties
)

watchEffect(() => {
  if (fixHeader.value) {
    scrollStyle.value = {
      overflowY: 'auto',
      maxHeight: toSizeValue(props.scroll?.y)
    }
  }
  if (shouldScrollX.value) {
    scrollStyle.value = {
      ...scrollStyle.value,
      overflowX: 'auto'
    }
    tableScrollStyle.value = {
      width: toSizeValue(props.scroll?.x),
      minWidth: '100%'
    }
  }
})

function getPinningState(column: Column<Record>) {
  const pinned = column.getIsPinned()
  const isLastLeft = pinned === 'left' && column.getIsLastColumn('left')
  const isFirstRight = pinned === 'right' && column.getIsFirstColumn('right')
  return {
    isFirstRight,
    isLastLeft,
    classes: {
      [`${componentCls.value}Cell--fixed-left`]: pinned === 'left',
      [`${componentCls.value}Cell--fixed-right`]: pinned === 'right',
      [`${componentCls.value}Cell--fixed-left-last`]: isLastLeft,
      [`${componentCls.value}Cell--fixed-right-first`]: isFirstRight
    },
    style: {
      left: pinned === 'left' ? `${column.getStart('left')}px` : undefined,
      right: pinned === 'right' ? `${column.getAfter('right')}px` : undefined
    } satisfies CSSProperties
  }
}

const { left: containerScrollLeft } = useElementScroll(containerRef)
const { width: containerWidth } = useElementSize(containerRef)
const { width: tableWidth } = useElementSize(tableRef)

const pinningLeftColumns = computed(
  () => fixedColumns.value.left.length > 0 && containerScrollLeft.value > 0
)
const pinningRightColumns = computed(
  () =>
    fixedColumns.value.right.length > 0 &&
    containerScrollLeft.value + containerWidth.value < tableWidth.value - 10 // add threshold to right side scrolling
)

//
// Table

const columnsDef = computed(() => crateColumnsDef(props.columns))

const table = useVueTable({
  get data() {
    return props.dataSource
  },
  get columns() {
    return columnsDef.value
  },
  state: {
    get columnPinning() {
      return {
        left: fixedColumns.value.left.map((column) => column.key!),
        right: fixedColumns.value.right.map((column) => column.key!)
      }
    }
  },
  getCoreRowModel: getCoreRowModel(),
  columnResizeMode: 'onChange'
})

provideTableContext(computed(() => ({ table })))

//
// Helper

const getRowKey = (row: Record) =>
  typeof props.rowKey === 'function' ? props.rowKey(row) : props.rowKey

function isEllipsis(key: string) {
  const originColumnDef = (props.columns as ColumnType<any>[]).find(
    (column) => (column.dataIndex || column.key) === key
  )
  return !!originColumnDef?.ellipsis
}
</script>

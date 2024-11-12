<script setup lang="ts" generic="Record extends DefaultRecordType">
import { useConfig } from '@/uses/config'
import { useElementScroll } from '@/uses/dom/useElementScroll'
import { cx } from '@emotion/css'
import { useToken } from '@starry/theme'
import { getCoreRowModel, useVueTable } from '@tanstack/vue-table'
import { useElementSize } from '@vueuse/core'
import { isNumber } from 'lodash-es'
import { computed, ref, watchEffect, type CSSProperties } from 'vue'
import { tableTokenFactory } from '../styles'
import { genBorderedStyle } from '../styles/bordered'
import { genEllipsisStyle } from '../styles/ellipsis'
import { genStickyStyle } from '../styles/fixed'
import { genSizeStyle } from '../styles/size'
import { genTableStyle } from '../styles/table'
import {
  propsType,
  type DefaultRecordType,
  type SelectionChangeEvent,
  type TableSlots
} from '../types'
import SBody from './Body'
import { provideTableContext } from './context'
import SHeader from './Header'
import {
  crateColumnsDef,
  flatColumns,
  isGroupColumn,
  normalizeColumnsKey,
  toSizeValue
} from './utils'

defineOptions({ name: 'STable' })

const props = defineProps(propsType<Record>())

const emits = defineEmits<{
  change: []
  selectionChange: [e: SelectionChangeEvent<Record>]
}>()

const slots = defineSlots<TableSlots<Record>>()

const { token } = useToken()

const config = useConfig()

const getRowKey = (row: Record) =>
  typeof props.rowKey === 'function' ? props.rowKey(row) : props.rowKey

//
// State

const containerRef = ref<HTMLElement>()
const tableRef = ref<HTMLTableElement>()

const hasGroupHeader = computed(() =>
  props.columns.some((column) => isGroupColumn(column))
)

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
      ...(props.bordered || hasGroupHeader.value
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

provideTableContext(
  computed(() => ({
    componentCls: componentCls.value,
    slots,
    columns: props.columns,
    flattenColumns: flattenColumns.value,
    table
  }))
)
</script>

<template>
  <div ref="containerRef" :class="classes.table" :style="scrollStyle">
    <table ref="tableRef" :style="tableStyle">
      <SHeader />
      <SBody :getRowKey="getRowKey" />
    </table>
  </div>
</template>

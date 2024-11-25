import type { SizeType } from '@/types'
import type { ExtractPublicPropTypes, PropType } from 'vue'

export type DefaultRecordType = any

export const tablePropTypes = <RecordType extends DefaultRecordType>() => ({
  // Data
  dataSource: {
    type: Array as PropType<RecordType[]>,
    default: () => []
  },
  rowKey: {
    type: [String, Function] as PropType<
      string | ((record: RecordType) => string)
    >,
    default: 'id'
  },
  columns: {
    type: Array as PropType<CombinedColumnType<RecordType>[]>,
    default: () => []
  },

  // Interaction
  loading: {
    type: Boolean,
    default: false
  },
  pagination: {
    type: [Boolean, Object]
  },
  rowSelection: {
    type: Object as PropType<SelectionType<RecordType>>
  },

  // Style
  tableLayout: {
    type: String as PropType<'auto' | 'fixed'>
  },
  size: {
    type: String as PropType<SizeType>,
    default: 'large'
  },
  scroll: {
    type: Object as PropType<ScrollType>
  },
  bordered: Boolean,
  emptyText: String
})

export type TablePropTypes = ExtractPublicPropTypes<
  ReturnType<typeof tablePropTypes>
>

export type ColumnType<RecordType> = {
  // Data
  dataIndex?: string
  key?: string
  title?: string
  customRender?:
    | string
    | ((props: {
        text: any
        record: RecordType
        index: number
        column: ColumnType<RecordType>
      }) => any)

  // Interaction
  defaultSortOrder?: 'ascend' | 'descend'
  sorter?: object
  resizable?: boolean

  // Style
  align?: 'left' | 'center' | 'right'
  colSpan?: number
  rowSpan?: number
  ellipsis?: boolean
  fixed?: boolean | 'left' | 'right'
  maxWidth?: number
  minWidth?: number
  responsive?: object
  width?: number
}

export type GroupColumnType<RecordType> = {
  title: string
  children: ColumnType<RecordType>[]
}

export type CombinedColumnType<RecordType> =
  | ColumnType<RecordType>
  | GroupColumnType<RecordType>

export type SelectionType<RecordType> = {
  columnTitle?: string
  columnWidth?: number
  fixed?: boolean
  hideSelectAll?: boolean
  defaultSelectedRowKeys?: string[]
  type: 'checkbox' | 'radio'
  onChange?: (e: SelectionChangeEvent<RecordType>) => void
}

export type ScrollType = {
  scrollTopOnChange?: boolean
  x?: number
  y?: number
}

export type SelectionChangeEvent<RecordType> = {
  rows: {
    selected: boolean
    rowKey: string
    record: RecordType
  }[]
}

export type TableBodySlotsProps<RecordType = any> = {
  text: any
  record: RecordType
  index: number
  column: ColumnType<RecordType>
}

export type TableSlots<RecordType> = {
  bodyCell?: (props: TableBodySlotsProps<RecordType>) => any
  empty?: () => any
}

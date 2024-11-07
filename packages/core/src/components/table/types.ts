import type { SizeType } from '@/types'
import type { Paths } from 'type-fest'
import type { ExtractPublicPropTypes, PropType } from 'vue'

export type DefaultRecordType = any

export const propsType = <RecordType extends DefaultRecordType>() => ({
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
    type: Array as PropType<MergedColumnType<RecordType>[]>,
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
    type: String as PropType<'auto' | 'fixed'>,
    default: 'auto'
  },
  size: {
    type: String as PropType<SizeType>,
    default: 'middle'
  },
  scroll: {
    type: Object as PropType<ScrollType>
  },
  bordered: Boolean,
  emptyText: String
})

export type TablePropsType = ExtractPublicPropTypes<
  ReturnType<typeof propsType>
>

export type ColumnType<RecordType extends DefaultRecordType> = {
  // Data
  dataIndex?: Paths<RecordType>
  key?: string
  title?: string

  // Interaction
  customRender?: (
    text: any,
    record: RecordType,
    index: number,
    column: any
  ) => any
  defaultSortOrder?: 'ascend' | 'descend'
  sorter?: object
  resizable?: boolean

  // Style
  align?: 'left' | 'center' | 'right'
  colSpan?: number
  ellipsis?: boolean
  fixed?: boolean | 'left' | 'right'
  maxWidth?: number
  minWidth?: number
  responsive?: object
  width?: number | string
}

export type GroupColumnType<RecordType extends DefaultRecordType> = {
  title: string
  children: ColumnType<RecordType>[]
}

export type MergedColumnType<RecordType extends DefaultRecordType> =
  | ColumnType<RecordType>
  | GroupColumnType<RecordType>

export type SelectionType<RecordType extends DefaultRecordType> = {
  columnTitle?: string
  columnWidth?: number
  fixed?: boolean
  hideSelectAll?: boolean
  defaultSelectedRowKeys?: string[]
  type: 'checkbox' | 'radio'
  onChange?: (e: SelectionChangeEvent<RecordType>) => void
}

export type ScrollType = {
  scrollOnChange?: boolean
  x?: number | string | 'max-content'
  y?: number | string
}

export type SelectionChangeEvent<RecordType extends DefaultRecordType> = {
  rows: {
    selected: boolean
    rowKey: string
    record: RecordType
  }[]
}

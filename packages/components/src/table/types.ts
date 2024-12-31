export type DefaultRecordType = any

export type ColumnType<RecordType = any> = {
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

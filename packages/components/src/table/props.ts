import { SizeType } from '@/config-provider'
import type { PropType } from 'vue'
import {
  CombinedColumnType,
  DefaultRecordType,
  ScrollType,
  SelectionType,
} from './types'

export const tableProps = <RecordType extends DefaultRecordType>() => ({
  // Data
  dataSource: {
    type: Array as PropType<RecordType[]>,
    default: () => [],
  },
  rowKey: {
    type: [String, Function] as PropType<
      string | ((record: RecordType) => string)
    >,
    default: 'id',
  },
  columns: {
    type: Array as PropType<CombinedColumnType<RecordType>[]>,
    default: () => [],
  },

  // Interaction
  loading: {
    type: Boolean,
    default: false,
  },
  pagination: {
    type: [Boolean, Object],
  },
  rowSelection: {
    type: Object as PropType<SelectionType<RecordType>>,
  },

  // Style
  tableLayout: {
    type: String as PropType<'auto' | 'fixed'>,
    default: 'auto',
  },
  size: {
    type: String as PropType<SizeType>,
    default: 'large',
  },
  scroll: {
    type: Object as PropType<ScrollType>,
    default: () => ({}),
  },
  bordered: Boolean,
  emptyText: {
    type: String,
    default: '暂无数据',
  },
})

import { isEmpty } from '@skirtle/vue-vnode-utils'
import { FlexRender, type Cell as TSCell } from '@tanstack/vue-table'
import { computed, defineComponent, type PropType } from 'vue'
import { useTableContext } from './context'
import { getPinningState } from './utils'

export default defineComponent({
  name: 'STableBody',
  props: {
    getRowKey: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const context = useTableContext()
    return () => {
      const { getRowKey } = props
      const { table } = context.value
      return (
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={getRowKey(row.original)}>
              {row.getVisibleCells().map((cell) => (
                <RowCell key={cell.id} cell={cell} />
              ))}
            </tr>
          ))}
        </tbody>
      )
    }
  }
})

const RowCell = defineComponent({
  name: 'STableBodyCell',
  props: {
    cell: {
      type: Object as PropType<TSCell<any, any>>,
      required: true
    }
  },
  setup(props) {
    const context = useTableContext()

    function isEllipsis(key: string) {
      return !!context.value.flattenColumns.find((column) => column.key === key)
        ?.ellipsis
    }

    return () => {
      const { cell } = props
      const { componentCls } = context.value
      const pinningState = getPinningState(cell.column, componentCls)

      return (
        <td
          key={cell.id}
          class={{ ...pinningState.classes }}
          style={{
            width: `${cell.column.getSize()}px`,
            ...pinningState.style
          }}
        >
          <span
            class={[
              `${componentCls}Cell-content`,
              {
                [`${componentCls}Cell--ellipsis`]: isEllipsis(cell.column.id)
              }
            ]}
          >
            <SlotRender cell={cell}>
              {{
                default: () => (
                  <FlexRender
                    render={cell.column.columnDef.cell}
                    props={cell.getContext()}
                  />
                )
              }}
            </SlotRender>
          </span>
        </td>
      )
    }
  }
})

const SlotRender = defineComponent({
  props: {
    cell: {
      type: Object as PropType<TSCell<any, any>>,
      required: true
    }
  },
  setup(props, { slots }) {
    const context = useTableContext()
    const contextSlots = computed(() => context.value.slots)

    return () => {
      const { cell } = props
      const bodyCellSlot = contextSlots.value.bodyCell

      let child

      if (bodyCellSlot) {
        child = bodyCellSlot({
          text: cell.getValue(),
          record: cell.row.original,
          index: cell.row.index,
          column: (cell.column.columnDef.meta as any).column
        })
      }

      if (!child || isEmpty(child)) {
        child = slots.default?.()
      }

      return child
    }
  }
})

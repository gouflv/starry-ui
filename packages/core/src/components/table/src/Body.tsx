import { FlexRender, type Cell as TSCell } from '@tanstack/vue-table'
import { defineComponent, type PropType } from 'vue'
import { useTableContext } from './context'
import { getPinningState } from './utils'

export default defineComponent({
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

      return (
        <td
          key={cell.id}
          class={{
            ...getPinningState(cell.column, componentCls).classes
          }}
          style={{
            width: `${cell.column.getSize()}px`,
            ...getPinningState(cell.column, componentCls).style
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
            <FlexRender
              render={cell.column.columnDef.cell}
              props={cell.getContext()}
            />
          </span>
        </td>
      )
    }
  }
})

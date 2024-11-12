import { FlexRender, type Header as TSHeader } from '@tanstack/vue-table'
import { computed, defineComponent, type PropType } from 'vue'
import { useTableContext } from './context'
import { getPinningState, mergeHeaderGroups } from './utils'

export default defineComponent({
  setup() {
    const context = useTableContext()
    const headerGroup = computed(() =>
      mergeHeaderGroups(context.value.table.getHeaderGroups())
    )
    return () => {
      return (
        <thead>
          {headerGroup.value.map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Cell key={header.id} header={header} />
              ))}
            </tr>
          ))}
        </thead>
      )
    }
  }
})

const Cell = defineComponent({
  props: {
    header: {
      type: Object as PropType<TSHeader<any, any>>,
      required: true
    }
  },
  setup(props) {
    const context = useTableContext()

    return () => {
      const { header } = props
      const { componentCls } = context.value
      const pinningState = getPinningState(header.column, componentCls)

      return (
        <th
          colspan={header.colSpan || 1}
          rowspan={header.rowSpan || 1}
          class={pinningState.classes}
          style={{
            width: `${header.getSize()}px`,
            ...pinningState.style
          }}
        >
          {!header.isPlaceholder && (
            <FlexRender
              render={header.column.columnDef.header}
              props={header.getContext()}
            />
          )}
        </th>
      )
    }
  }
})

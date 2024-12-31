import { Header as THeader } from '@tanstack/table-core'
import { computed, defineComponent, PropType } from 'vue'
import { injectTableContext } from './context'
import FlexRender from './FlexRender'
import { mergeHeaderGroups } from './utils'

export default defineComponent({
  name: 'STableHeader',
  setup() {
    const context = injectTableContext()

    const headerGroup = computed(() =>
      mergeHeaderGroups(context.table.getHeaderGroups()),
    )

    return () => (
      <thead>
        {headerGroup.value.map((headerGroup) => (
          <tr key="{headerGroup.id}">
            {headerGroup.headers.map((header) => (
              <Cell key={header.id} header={header} />
            ))}
          </tr>
        ))}
      </thead>
    )
  },
})

const Cell = defineComponent({
  name: 'STableHeaderCell',
  props: {
    header: {
      type: Object as PropType<THeader<any, any>>,
      required: true,
    },
  },
  setup(props) {
    const context = injectTableContext()

    return () => {
      const { header } = props
      const { componentCls } = context
      const pinningState = {} as any // getPinningState(header.column, componentCls.value)

      console.log(header.getContext())

      return (
        <th
          colspan={header.colSpan || 1}
          rowspan={header.rowSpan || 1}
          class={pinningState.classes}
          style={{
            width: `${header.getSize()}px`,
            ...pinningState.style,
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
  },
})

import { computed, defineComponent, onMounted, ref } from 'vue'
import { injectTableContext } from './context'
import TableBody from './TableBody.vue'
import TableHeader from './TableHeader'

export default defineComponent({
  name: 'STableContent',
  setup() {
    const context = injectTableContext()

    const el = ref()
    onMounted(() => {
      context.tableRef = el
    })

    const style = computed(() => {
      // const {
      //   componentCls,
      //   tableComponentToken: token,
      //   size,
      //   bordered,
      //   hasGroupHeader,
      //   fixHeader,
      //   pinningLeftColumns,
      //   pinningRightColumns,
      // } = context
      // return cx([
      //   componentCls,
      //   genTableStyle(token),
      //   genSizeStyle(token, size),
      //   genEllipsisStyle(token),
      //   genStickyStyle(token),
      //   ...(bordered || hasGroupHeader
      //     ? [`${componentCls}--bordered`, genBorderedStyle(token)]
      //     : []),
      //   fixHeader && `${componentCls}--sticky-header`,
      //   pinningLeftColumns && `${componentCls}--pinning-left`,
      //   pinningRightColumns && `${componentCls}--pinning-right`,
      // ])

      return {}
    })

    return () => (
      <div ref={el}>
        <TableHeader />
        <TableBody />
      </div>
    )
  },
})

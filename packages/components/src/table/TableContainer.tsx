import { defineComponent, onMounted, ref } from 'vue'
import { injectTableContext } from './context'

export default defineComponent({
  name: 'STableContent',
  setup(props, { slots }) {
    const context = injectTableContext()

    const el = ref()
    onMounted(() => {
      context.tableRef = el
    })

    return () => <div ref={el}>{slots.default?.()}</div>
  },
})

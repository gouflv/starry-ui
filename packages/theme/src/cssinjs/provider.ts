import { computed, ComputedRef, defineComponent, PropType, provide } from 'vue'
import { DesignTokenContext, DesignTokenContextKey } from './context'

export const DesignTokenProvider = defineComponent({
  props: {
    value: {
      type: Object as PropType<DesignTokenContext>
    }
  },
  setup(props, { slots }) {
    useDesignTokenProvider(computed(() => props.value!))
    return () => {
      return slots.default?.()
    }
  }
})

export const useDesignTokenProvider = (
  value: ComputedRef<DesignTokenContext>
) => {
  provide(DesignTokenContextKey, value)
  // TODO: remove
  // watch(
  //   value,
  //   () => {
  //     globalDesignTokenApi.value = unref(value)
  //     triggerRef(globalDesignTokenApi)
  //   },
  //   { immediate: true, deep: true }
  // )
}

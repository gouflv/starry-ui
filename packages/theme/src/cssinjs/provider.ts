import { computed, ComputedRef, defineComponent, PropType, provide } from 'vue'
import { AliasToken, MapToken, SeedToken } from '../interface'
import defaultAlgoliaTheme from '../themes/default'
import { DesignTokenContext, DesignTokenContextKey } from './context'
import { DerivativeFunc } from './theme/interface'
import Theme from './theme/Theme'

type Algorithm = DerivativeFunc<SeedToken, MapToken>

export const DesignTokenProvider = defineComponent({
  props: {
    token: {
      type: Object as PropType<Partial<AliasToken>>
    },
    algorithm: {
      type: [Function, Array] as PropType<Algorithm | Algorithm[]>
    }
  },
  setup(props, { slots }) {
    // TODO: support nested provider, need to merge token and theme
    // const parent = inject<ComputedRef<DesignTokenContext>>(
    //   DesignTokenContextKey
    // )

    useDesignTokenProvider(
      computed(() => ({
        token: props.token || {},
        theme: new Theme(props.algorithm || defaultAlgoliaTheme)
      }))
    )
    return () => {
      return slots.default?.()
    }
  }
})

const useDesignTokenProvider = (value: ComputedRef<DesignTokenContext>) => {
  provide(DesignTokenContextKey, value)
}

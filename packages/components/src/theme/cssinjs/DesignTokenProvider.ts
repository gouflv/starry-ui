import {
  type AliasToken,
  type DerivativeFunc,
  type MapToken,
  type SeedToken,
  Theme,
  themes,
} from '@starry-ui/theme'
import { computed, defineComponent, type PropType, provide } from 'vue'
import { DesignTokenContextKey } from './context'

export type Algorithm = DerivativeFunc<SeedToken, MapToken>

export type DesignTokenContext = {
  token: Partial<AliasToken>
  theme?: Theme<SeedToken, MapToken>
}

/**
 * Customized SeedToken and Algorithm
 */
const DesignTokenProvider = defineComponent({
  name: 'DesignTokenProvider',
  props: {
    token: {
      type: Object as PropType<Partial<AliasToken>>,
    },
    algorithm: {
      type: [Function, Array] as PropType<Algorithm | Algorithm[]>,
    },
  },
  setup(props, { slots }) {
    // TODO: To support nested provider, should merge token and theme
    // const parent = inject<ComputedRef<DesignTokenContext>>(
    //   DesignTokenContextKey
    // )

    provide(
      DesignTokenContextKey,
      computed(() => ({
        token: props.token || {},
        theme: new Theme<SeedToken, MapToken>(
          props.algorithm || themes.default,
        ),
      })),
    )

    return () => {
      return slots.default?.()
    }
  },
})

export default DesignTokenProvider

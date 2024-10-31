import { computed, defineComponent, type PropType, provide } from 'vue'
import type { AliasToken, MapToken, SeedToken } from '../interface'
import defaultAlgoliaTheme from '../themes/default'
import { DesignTokenContextKey } from './context'
import { type DerivativeFunc } from './theme/interface'
import Theme from './theme/Theme'

export type Algorithm = DerivativeFunc<SeedToken, MapToken>

export const DesignTokenProvider = defineComponent({
  name: 'DesignTokenProvider',
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

    provide(
      DesignTokenContextKey,
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

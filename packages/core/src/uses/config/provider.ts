import type { SizeType } from '@/types'
import { computed, defineComponent, inject } from 'vue'
import { string } from 'vue-types'
import { ConfigProviderKey } from './context'

export const ConfigProvider = defineComponent({
  props: {
    size: string<SizeType>().def('middle')
  },
  setup(props, { slots }) {
    inject(
      ConfigProviderKey,
      computed(() => ({
        size: props.size
      }))
    )

    return () => slots.default?.()
  }
})

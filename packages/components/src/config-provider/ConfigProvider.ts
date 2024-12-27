import { computed, defineComponent, provide } from 'vue'
import { ConfigProviderKey, defaultConfig } from './context'

const ConfigProvider = defineComponent({
  name: 'ConfigProvider',
  props: {
    prefixCls: {
      type: String,
      default: 'starry',
    },
    componentSize: {
      type: String,
      default: 'middle',
    },
    componentDisabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    provide(
      ConfigProviderKey,
      computed(() => Object.assign({}, defaultConfig, props)),
    )

    return () => {
      return slots.default?.()
    }
  },
})

export default ConfigProvider

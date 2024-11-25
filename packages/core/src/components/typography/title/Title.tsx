import { useConfig } from '@/uses/config'
import { cx } from '@emotion/css'
import { useToken } from '@starry-ui/theme'
import { computed, defineComponent, type PropType } from 'vue'
import { genTitleStyle, TitleTokenFactory } from './style'

export default defineComponent({
  props: {
    level: {
      type: Number as PropType<1 | 2 | 3 | 4 | 5>,
      default: 1,
      validator: (level: number) => [1, 2, 3, 4, 5].includes(level)
    }
  },
  setup(props, { slots }) {
    const config = useConfig()
    const componentCls = computed(() => `${config.value.prefixCls}Title`)
    const { token } = useToken()
    const titleToken = computed(() =>
      TitleTokenFactory(token.value, componentCls.value)
    )
    const classes = computed(() => {
      return cx([, componentCls.value, genTitleStyle(titleToken.value)])
    })

    return () => {
      const { level } = props
      const Tag = `h${level}` as any
      return <Tag class={classes.value}>{slots.default?.()}</Tag>
    }
  }
})

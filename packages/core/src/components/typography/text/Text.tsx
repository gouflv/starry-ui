import { useConfig } from '@/uses/config'
import { cx } from '@emotion/css'
import { useToken } from '@starry-ui/theme'
import {
  computed,
  defineComponent,
  type ExtractPublicPropTypes,
  type PropType
} from 'vue'
import { genTextStyle } from './style'

export type TextType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'disabled'

export type EllipsisType = {
  rows?: number
  expandable?: boolean
  symbol?: string
  onEllipsis?: () => void
  onExpand?: () => void
}

export const propsType = {
  content: {
    type: String,
    required: true
  },
  ellipsis: Object as PropType<EllipsisType>,
  strong: Boolean,
  type: String as PropType<TextType>
}

export type TextProps = ExtractPublicPropTypes<typeof propsType>

export default defineComponent({
  props: propsType,
  setup(props) {
    const { token } = useToken()
    const config = useConfig()

    const componentCls = computed(() => `${config.value.prefixCls}Text`)
    const textToken = computed(() => ({
      ...token.value,
      componentCls: componentCls.value
    }))

    const classes = computed(() => {
      const { componentCls } = textToken.value
      return cx([
        genTextStyle(textToken.value),
        props.type === 'primary' && `${componentCls}--primary`,
        props.type === 'secondary' && `${componentCls}--secondary`,
        props.type === 'success' && `${componentCls}--success`,
        props.type === 'warning' && `${componentCls}--warning`,
        props.type === 'danger' && `${componentCls}--danger`,
        props.type === 'disabled' && `${componentCls}--disabled`
      ])
    })

    return () => {
      let child: any = props.content
      if (props.strong) {
        child = <strong>{child}</strong>
      }
      return <span class={classes.value}>{child}</span>
    }
  }
})

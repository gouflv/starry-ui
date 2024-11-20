import { useConfig } from '@/uses/config'
import { cx } from '@emotion/css'
import { useToken } from '@starry-ui/theme'
import {
  computed,
  defineComponent,
  type ExtractPublicPropTypes,
  type PropType
} from 'vue'
import { genEllipsisStyle, genTextStyle } from './style'

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

export const propTypes = {
  content: {
    type: String,
    required: true
  },
  ellipsis: [Boolean, Object] as PropType<boolean | EllipsisType>,
  strong: Boolean,
  type: String as PropType<TextType>
}

const DefaultEllipsisOption: EllipsisType = {
  rows: 1,
  expandable: false,
  symbol: '展开',
  onEllipsis: () => {},
  onExpand: () => {}
}

export type TextPropTypes = ExtractPublicPropTypes<typeof propTypes>

export default defineComponent({
  name: 'SText',
  props: propTypes,
  setup(props) {
    const { token } = useToken()
    const config = useConfig()

    const componentCls = computed(() => `${config.value.prefixCls}Text`)
    const textToken = computed(() => ({
      ...token.value,
      componentCls: componentCls.value
    }))

    const ellipsisOption = computed(() => {
      if (!props.ellipsis) return
      if (typeof props.ellipsis === 'boolean') return DefaultEllipsisOption
      return { ...DefaultEllipsisOption, ...props.ellipsis }
    })

    const isExpandable = computed(() => ellipsisOption.value?.expandable)

    const classes = computed(() => {
      const { componentCls } = textToken.value
      return cx([
        genTextStyle(textToken.value),
        ellipsisOption.value &&
          !isExpandable.value &&
          genEllipsisStyle(textToken.value, ellipsisOption.value),
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

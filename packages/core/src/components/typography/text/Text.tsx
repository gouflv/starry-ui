import { useConfig } from '@/uses/config'
import { cx } from '@emotion/css'
import { useToken } from '@starry-ui/theme'
import {
  computed,
  defineComponent,
  type AnchorHTMLAttributes,
  type ExtractPublicPropTypes,
  type PropType
} from 'vue'
import { genEllipsisStyle, genTextStyle, getLinkStyle } from './style'

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
  tooltip?: boolean
  onEllipsis?: () => void
  onExpand?: () => void
}

export const textPropTypes = {
  content: String,
  ellipsis: [Boolean, Object] as PropType<boolean | EllipsisType>,
  strong: Boolean,
  type: String as PropType<TextType>
}

const DefaultEllipsisOption: EllipsisType = {
  rows: 1,
  expandable: false,
  symbol: '展开',
  tooltip: false,
  onEllipsis: () => {},
  onExpand: () => {}
}

export type TextPropTypes = ExtractPublicPropTypes<typeof textPropTypes> &
  AnchorHTMLAttributes

export default defineComponent<TextPropTypes>({
  name: 'SText',
  props: textPropTypes,
  setup(props, { attrs, slots }) {
    const { token } = useToken()
    const config = useConfig()

    const componentCls = computed(() => `${config.value.prefixCls}Text`)
    const textToken = computed(() => ({
      ...token.value,
      componentCls: componentCls.value
    }))

    const ellipsisOption = computed(() => {
      if (!props.ellipsis) return
      if (typeof props.ellipsis === 'boolean' && props.ellipsis)
        return DefaultEllipsisOption
      return { ...DefaultEllipsisOption, ...props.ellipsis }
    })

    const useCSSEllipsis = computed(() => {
      if (!ellipsisOption.value) return false
      if (ellipsisOption.value.tooltip) return false
      if (ellipsisOption.value.expandable) return false
      return true
    })

    const isExpandable = computed(() => ellipsisOption.value?.expandable)

    const classes = computed(() => {
      const { componentCls } = textToken.value
      return cx([
        genTextStyle(textToken.value),
        ellipsisOption.value &&
          useCSSEllipsis.value &&
          genEllipsisStyle(textToken.value, ellipsisOption.value),
        props.type === 'primary' && `${componentCls}--primary`,
        props.type === 'secondary' && `${componentCls}--secondary`,
        props.type === 'success' && `${componentCls}--success`,
        props.type === 'warning' && `${componentCls}--warning`,
        props.type === 'danger' && `${componentCls}--danger`,
        props.type === 'disabled' && `${componentCls}--disabled`,
        !!attrs.href && getLinkStyle(textToken.value)
      ])
    })

    return () => {
      let child: any = props.content || slots.default?.()

      if (props.strong) {
        child = <strong>{child}</strong>
      }

      if (attrs.href) {
        return <a class={classes.value}>{child}</a>
      }

      return <span class={classes.value}>{child}</span>
    }
  }
})

import { useConfig } from '@/uses/config'
import { cx } from '@emotion/css'
import { isEmpty } from '@skirtle/vue-vnode-utils'
import { useToken } from '@starry-ui/theme'
import { computed, defineComponent, type SlotsType } from 'vue'
import LoadingIcon from './LoadingIcon'
import {
  genButtonBlockStyle,
  genButtonLoadingStyle,
  genButtonShapeStyle,
  genButtonSharedStyle,
  genButtonSizeStyle,
  genButtonTypeStyle
} from './style'
import { propTypes } from './type'

export default defineComponent({
  name: 'SButton',
  props: propTypes,
  emits: ['click'],
  slots: Object as SlotsType<{
    default: any
    icon: any
  }>,
  setup(props, { attrs, slots, emit }) {
    const { token } = useToken()
    const config = useConfig()

    const mergedSize = computed(() => props.size || config.value.size)
    const mergedDisabled = computed(() => props.disabled)

    const componentCls = computed(() => `${config.value.prefixCls}Button`)
    const buttonToken = computed(() => ({
      ...token.value,
      componentCls: componentCls.value
    }))
    const classes = computed(() =>
      cx(
        componentCls.value,
        genButtonSharedStyle(buttonToken.value),
        genButtonTypeStyle(buttonToken.value, props.type),
        genButtonSizeStyle(buttonToken.value, mergedSize.value),
        genButtonShapeStyle(buttonToken.value, props.shape),
        props.block && genButtonBlockStyle(),
        props.danger && 'danger',
        props.loading && genButtonLoadingStyle(buttonToken.value)
      )
    )

    function onClick(e: MouseEvent) {
      if (mergedDisabled.value || props.loading) return
      emit('click', e)
    }

    return () => {
      // slot function should be called in render function
      const { icon = slots.icon?.() } = props
      const isIconOnly = !slots.default?.()[0].children?.length && !!icon

      const iconNode =
        icon && !props.loading ? (
          icon
        ) : (
          <LoadingIcon existsIcon={!!icon} loading={props.loading} />
        )

      const commonProps = {
        ...attrs,
        title: props.title,
        class: [
          classes.value,
          attrs.class,
          isIconOnly && `${componentCls.value}--icon-only`
        ],
        disabled: mergedDisabled.value || undefined
      }

      let child = slots.default?.()
      if (child && !isEmpty(child)) {
        child = <span>{child}</span>
      }

      if (props.href) {
        return (
          <a
            {...{
              ...commonProps,
              href: props.href,
              target: props.target
            }}
          >
            {iconNode}
            {child}
          </a>
        )
      }

      return (
        <button
          {...{
            ...commonProps,
            onClick
          }}
        >
          {iconNode}
          {child}
        </button>
      )
    }
  }
})

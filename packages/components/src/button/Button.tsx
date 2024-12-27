import { useConfig } from '@/config-provider'
import { cx } from '@/theme'
import { useToken } from '@/theme/cssinjs'
import { computed, defineComponent } from 'vue'
import LoadingIcon from './LoadingIcon'
import {
  genButtonBlockStyle,
  genButtonLoadingStyle,
  genButtonShapeStyle,
  genButtonSharedStyle,
  genButtonSizeStyle,
  genButtonTypeStyle,
} from './style'
import { buttonPropTypes } from './type'

export default defineComponent({
  name: 'SButton',
  props: buttonPropTypes,
  emits: ['click'],
  setup(props, { attrs, slots, emit }) {
    const token = useToken()
    const config = useConfig()

    const mergedSize = computed(() => props.size || config.value.componentSize)
    const mergedDisabled = computed(() => {
      if (props.disabled !== undefined) return props.disabled
      return config.value.componentDisabled
    })

    const componentCls = computed(() => `${config.value.prefixCls}Button`)
    const buttonToken = computed(() => ({
      ...token.value,
      componentCls: componentCls.value,
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
        props.loading && genButtonLoadingStyle(buttonToken.value),
      ),
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
          isIconOnly && `${componentCls.value}--icon-only`,
        ],
        disabled: mergedDisabled.value || undefined,
      }

      const child = <span>{slots.default?.()}</span>

      if (props.href) {
        return (
          <a
            {...{
              ...commonProps,
              href: props.href,
              target: props.target,
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
            onClick,
          }}
        >
          {iconNode}
          {child}
        </button>
      )
    }
  },
})

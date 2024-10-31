import { useConfig } from '@/uses/config'
import { cx } from '@emotion/css'
import { useToken } from '@starry/theme'
import { computed, defineComponent, type SlotsType } from 'vue'
import LoadingIcon from './loading-icon'
import {
  genButtonBlockStyle,
  genButtonLoadingStyle,
  genButtonShapeStyle,
  genButtonSharedStyle,
  genButtonSizeStyle,
  genButtonTypeStyle
} from './style'
import { propsType } from './types'

export default defineComponent({
  name: 'SButton',
  props: propsType,
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

    const { icon = slots.icon?.() } = props
    const isIconOnly = !slots.default?.()[0].children?.length && !!icon

    const classes = computed(() =>
      cx(
        `${config.value.prefixCls}Button`,
        genButtonSharedStyle(token.value),
        genButtonTypeStyle(token.value, props.type),
        genButtonSizeStyle(token.value, mergedSize.value, isIconOnly),
        genButtonShapeStyle(token.value, props.shape),
        props.block && genButtonBlockStyle(),
        props.danger && 'danger',
        props.loading && genButtonLoadingStyle(token.value)
      )
    )

    function onClick(e: MouseEvent) {
      if (mergedDisabled.value || props.loading) return
      emit('click', e)
    }

    return () => {
      const iconNode =
        icon && !props.loading ? (
          icon
        ) : (
          <LoadingIcon existsIcon={!!icon} loading={props.loading} />
        )

      return (
        <button
          {...{
            ...attrs,
            title: props.title,
            class: [classes.value, attrs.class],
            disabled: mergedDisabled.value,
            onClick
          }}
        >
          {iconNode}
          {slots.default?.()}
        </button>
      )
    }
  }
})

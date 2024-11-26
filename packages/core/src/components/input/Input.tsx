import { useConfig } from '@/uses/config'
import { CloseCircleFilled } from '@ant-design/icons-vue'
import { cx } from '@emotion/css'
import { useToken } from '@starry-ui/theme'
import { computed, defineComponent, ref, watch, type SlotsType } from 'vue'
import { genInputStyle, genWrapperStyle, InputTokenFactory } from './style'
import { inputPropTypes } from './type'

export default defineComponent({
  name: 'SInput',
  props: inputPropTypes,
  slots: Object as SlotsType<{
    prefix?: () => any
    suffix?: () => any
  }>,
  emits: ['update:value', 'change', 'clear'],
  inheritAttrs: false,
  setup(props, { attrs, slots, emit }) {
    const config = useConfig()
    const componentCls = computed(() => `${config.value.prefixCls}Input`)
    const { token } = useToken()

    //
    // state
    const innerValue = ref(props.value || '')
    watch(
      () => props.value,
      () => {
        innerValue.value = props.value || ''
      }
    )
    watch(innerValue, () => {
      emit('update:value', innerValue.value)
    })

    //
    // event

    function handleChange(e: Event) {
      innerValue.value = (e.target as HTMLInputElement).value
      emit('change', e)
    }
    function handleClear(e: MouseEvent) {
      e.stopPropagation()
      innerValue.value = ''
      emit('clear', e)
    }

    //
    // style

    const inputToken = computed(() =>
      InputTokenFactory(token.value, componentCls.value)
    )
    const classes = computed(() => {
      return {
        wrap: cx([
          `${componentCls.value}Wrap`,
          genWrapperStyle(inputToken.value),
          props.disabled && `${componentCls.value}Wrap-disabled`,
          props.size === 'small' && `${componentCls.value}Wrap-sm`,
          props.size === 'large' && `${componentCls.value}Wrap-lg`
        ]),
        input: cx([
          `${componentCls.value}Input`,
          genInputStyle(inputToken.value)
        ]),
        prefix: `${componentCls.value}Prefix`,
        suffix: `${componentCls.value}Suffix`,
        clear: `${componentCls.value}ClearIcon`,
        password: `${componentCls.value}PasswordIcon`
      }
    })

    const getClearIcon = () => {
      const show = props.allowClear && innerValue.value && !props.disabled
      return (
        <span
          class={cx([
            classes.value.clear,
            !show && `${componentCls.value}ClearIcon-hidden`
          ])}
          onClick={handleClear}
        >
          <CloseCircleFilled />
        </span>
      )
    }

    return () => {
      const inputProps = {
        type: props.type,
        disabled: props.disabled,
        value: innerValue.value,
        oninput: handleChange,

        autocomplete: props.autocomplete,
        id: props.id,
        name: props.name,
        placeholder: props.placeholder
      }

      const prefixNode = slots.prefix && (
        <span class={classes.value.prefix}>{slots.prefix()}</span>
      )
      const suffixNode = (slots.suffix || props.allowClear) && (
        <span class={classes.value.suffix}>
          {getClearIcon()}
          {slots.suffix?.()}
        </span>
      )

      return (
        <span class={classes.value.wrap} {...attrs}>
          {prefixNode}
          <input class={classes.value.input} {...inputProps} {...attrs} />
          {suffixNode}
        </span>
      )
    }
  }
})

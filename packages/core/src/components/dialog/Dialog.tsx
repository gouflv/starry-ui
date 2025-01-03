import { useConfig } from '@/uses/config'
import { CloseOutlined } from '@ant-design/icons-vue'
import { css, cx } from '@emotion/css'
import { useToken } from '@starry-ui/theme'
import { onClickOutside } from '@vueuse/core'
import { Dialog } from 'radix-vue/namespaced'
import { computed, defineComponent, ref, watch, type SlotsType } from 'vue'
import { Button } from '../button'
import {
  genFullScreenStyle,
  genMaskStyle,
  genModalCenterStyle,
  genModalStyle,
  modalTokenFactory
} from './style'
import { dialogPropTypes } from './type'

export default defineComponent({
  name: 'SDialog',
  inheritAttrs: false,
  props: dialogPropTypes,
  emits: ['ok', 'cancel', 'update:open'],
  slots: Object as SlotsType<{
    default?: (props: { open: boolean }) => any
    trigger?: () => any
    header?: () => any
    footer?: () => any
  }>,
  setup(props, { attrs, slots, emit }) {
    //
    // state

    const innerOpen = ref(props.open)
    watch(
      () => props.open,
      () => (innerOpen.value = props.open)
    )
    watch(
      () => innerOpen.value,
      () => emit('update:open', innerOpen.value)
    )

    //
    // event

    // mask click event
    const modalRef = ref()
    function handleMaskClick(e: any) {
      if (props.maskClosable) {
        innerOpen.value = false
      }
    }
    onClickOutside(modalRef, handleMaskClick)

    function handleOk() {
      emit('ok')
    }

    function handleCancel() {
      innerOpen.value = false
      emit('cancel')
    }

    //
    // style

    const { token } = useToken()
    const config = useConfig()
    const componentCls = computed(() => `${config.value.prefixCls}Dialog`)
    const modalToken = computed(() =>
      modalTokenFactory(token.value, componentCls.value)
    )

    const classes = computed(() => ({
      mask: cx([`${componentCls.value}Mask`, genMaskStyle(modalToken.value)]),
      wrap: cx([
        `${componentCls.value}Wrap`,
        genModalStyle(modalToken.value),
        props.centered && !props.full && genModalCenterStyle(modalToken.value),
        props.full && genFullScreenStyle(modalToken.value),
        css({
          zIndex: props.zIndex
        })
      ]),
      modal: cx([
        `${componentCls.value}Modal`,
        attrs.class as any,
        css({
          width: props.width,
          ...(attrs.style || {})
        })
      ]),
      content: cx([`${componentCls.value}Content`]),
      close: cx([`${componentCls.value}Close`]),
      header: cx([`${componentCls.value}Header`]),
      title: cx([`${componentCls.value}Title`]),
      body: cx([`${componentCls.value}Body`]),
      footer: cx([`${componentCls.value}Footer`])
    }))

    return () => {
      if (props.destroyOnClose && !innerOpen.value) {
        return null
      }

      let headerNode = slots.header?.()
      if (props.title) {
        headerNode = (
          <div class={classes.value.header}>
            <Dialog.Title class={classes.value.title}>
              {props.title}
            </Dialog.Title>
          </div>
        )
      }

      let footerNode = null
      if (props.footer) {
        footerNode = slots.footer ? (
          slots.footer()
        ) : (
          <div class={classes.value.footer}>
            <Button onClick={handleCancel} {...props.cancelButtonProps}>
              取消
            </Button>
            <Button
              type={'primary'}
              onClick={handleOk}
              {...props.okButtonProps}
            >
              确定
            </Button>
          </div>
        )
      }

      let closer = null
      if (props.closeable) {
        closer = (
          <Dialog.Close aria-label="Close" class={classes.value.close}>
            <CloseOutlined />
          </Dialog.Close>
        )
      }

      const wrap = (
        <Dialog.Content class={classes.value.wrap}>
          <div class={classes.value.modal} ref={modalRef}>
            <div class={classes.value.content}>
              {closer}

              {headerNode}

              {/* Body */}
              <div class={classes.value.body}>
                {slots.default?.({
                  open: innerOpen.value
                })}
              </div>

              {footerNode}
            </div>
          </div>
        </Dialog.Content>
      )

      const portal = (
        <Dialog.Portal to={props.container}>
          {props.mask && <Dialog.Overlay class={classes.value.mask} />}
          {wrap}
        </Dialog.Portal>
      )

      return (
        <Dialog.Root
          class={classes.value}
          open={innerOpen.value}
          onUpdate:open={(open) => (innerOpen.value = open)}
        >
          {slots.trigger && (
            <Dialog.Trigger asChild>{slots.trigger()}</Dialog.Trigger>
          )}
          {portal}
        </Dialog.Root>
      )
    }
  }
})

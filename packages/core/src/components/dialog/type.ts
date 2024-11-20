import type { ExtractPublicPropTypes, PropType } from 'vue'
import type { ButtonPropType } from '../button'

export const propTypes = {
  // TODO
  // bodyStyle: Object as PropType<CSSProperties>,
  cancelButtonProps: Object as PropType<ButtonPropType>,
  cancelText: {
    type: String,
    default: '取消'
  },
  centered: Boolean,
  closeable: {
    type: Boolean,
    default: true
  },
  destroyOnClose: Boolean,
  footer: {
    type: Boolean,
    default: true
  },
  container: {
    type: [String, HTMLElement] as PropType<string | HTMLElement>,
    default: 'body'
  },
  mask: {
    type: Boolean,
    default: true
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  okButtonProps: Object as PropType<ButtonPropType>,
  okText: {
    type: String,
    default: '确定'
  },
  title: String,
  open: Boolean,
  width: {
    type: [String, Number] as PropType<string | number>,
    default: 520
  },
  zIndex: {
    type: Number,
    default: 1000
  }
}

export type DialogPropTypes = ExtractPublicPropTypes<typeof propTypes>

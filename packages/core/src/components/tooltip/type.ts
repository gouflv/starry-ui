import type { CSSProperties, ExtractPublicPropTypes, PropType } from 'vue'

export const propTypes = {
  container: {
    type: [String, Object] as PropType<string | HTMLElement>
  },
  delay: {
    type: Number,
    default: 100
  },
  disabled: Boolean,
  overlayClass: String,
  overlayStyle: Object as PropType<CSSProperties>,
  open: Boolean,
  title: String
}

export type TooltipPropTypes = ExtractPublicPropTypes<typeof propTypes>

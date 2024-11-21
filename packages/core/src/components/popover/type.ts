import type { PlacementType } from '@/types'
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
  placement: Object as PropType<PlacementType>,
  title: String,
  content: String
}

export type PopoverPropTypes = ExtractPublicPropTypes<typeof propTypes>

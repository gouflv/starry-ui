import type { AliasToken } from '@starry-ui/theme'
import { VNode } from 'vue'

export type ComponentToken = AliasToken & {
  componentCls: string
}

export type VNodeTypes = VNode | VNode[]

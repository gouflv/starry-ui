import {
  type AliasToken,
  type MapToken,
  type SeedToken,
  Theme,
} from '@starry-ui/theme'
import { type ComputedRef, type InjectionKey } from 'vue'

export type DesignTokenContext = {
  token: Partial<AliasToken>
  theme?: Theme<SeedToken, MapToken>
}

export const DesignTokenContextKey: InjectionKey<
  ComputedRef<DesignTokenContext>
> = Symbol('DesignTokenContext')

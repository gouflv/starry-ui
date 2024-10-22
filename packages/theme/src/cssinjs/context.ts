import { ComputedRef, InjectionKey, shallowRef } from 'vue'
import { AliasToken, MapToken, SeedToken } from '../interface'
import defaultSeedToken from '../themes/seed'
import Theme from './theme/Theme'

export type DesignTokenContext = {
  token: Partial<AliasToken>
  theme?: Theme<SeedToken, MapToken>
}

export const defaultConfig: DesignTokenContext = {
  token: defaultSeedToken
}

export const DesignTokenContextKey: InjectionKey<
  ComputedRef<DesignTokenContext>
> = Symbol('DesignTokenContext')

export const globalDesignTokenApi = shallowRef<DesignTokenContext>()

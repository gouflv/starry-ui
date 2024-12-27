import type { AliasToken } from './alias'

export type OverrideToken = Partial<AliasToken>

export { PresetColors } from './presetColors'
export type {
  ColorPalettes,
  PresetColorKey,
  PresetColorType,
} from './presetColors'

export type { SeedToken } from './seeds'

export type {
  ColorMapToken,
  ColorNeutralMapToken,
  FontMapToken,
  HeightMapToken,
  MapToken,
  SizeMapToken,
  StyleMapToken,
} from './maps'

export type { AliasToken } from './alias'

// TODO: Final token which contains the components level override
export type GlobalToken = AliasToken

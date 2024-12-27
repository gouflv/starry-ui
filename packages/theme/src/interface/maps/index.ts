import type { ColorPalettes } from '../presetColors'
import type { SeedToken } from '../seeds'
import type { ColorMapToken } from './colors'
import type { FontMapToken } from './font'
import type { HeightMapToken, SizeMapToken } from './size'
import type { StyleMapToken } from './style'

export * from './colors'
export * from './font'
export * from './size'
export * from './style'

export interface MapToken
  extends SeedToken,
    ColorPalettes,
    ColorMapToken,
    SizeMapToken,
    HeightMapToken,
    StyleMapToken,
    FontMapToken {}

import type { SeedToken, StyleMapToken } from '../../interface'
import genRadius from './genRadius'

export default function genCommonMapToken(token: SeedToken): StyleMapToken {
  const { borderRadius, lineWidth } = token

  return {
    // line
    lineWidthBold: lineWidth + 1,

    // radius
    ...genRadius(borderRadius)
  }
}

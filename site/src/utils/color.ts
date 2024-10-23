import { TinyColor } from '@ctrl/tinycolor'

export function isDarkColor(color: string): boolean {
  const brightness = new TinyColor(color).getBrightness()
  return brightness < 150
}

export function fixRGBA2Hex(color: string): string {
  const c = new TinyColor(color)
  if (c.getAlpha() === 1) {
    return c.toHexString()
  }
  return color
}

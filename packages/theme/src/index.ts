import { TinyColor } from '@ctrl/tinycolor'
import compactAlgoliaTheme from './themes/compact'
import defaultAlgoliaTheme from './themes/default'

export * from './cssinjs'
export * from './interface'
export * from './internal'
export { TinyColor }

export const themes = {
  default: defaultAlgoliaTheme,
  compact: compactAlgoliaTheme,
}

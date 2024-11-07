import { TinyColor } from '@ctrl/tinycolor'
import compactAlgoliaTheme from './themes/compact'
import defaultAlgoliaTheme from './themes/default'
import loosenAlgoliaTheme from './themes/loosen'

export * from './cssinjs'
export * from './interface'
export { TinyColor }
export const themes = {
  default: defaultAlgoliaTheme,
  compact: compactAlgoliaTheme,
  loosen: loosenAlgoliaTheme
}

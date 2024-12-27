import defaultDerivative from '../themes/default'
import createTheme from './createTheme'
import Theme from './Theme'

const defaultTheme = createTheme(defaultDerivative)

export { default as formatToken } from './alias'
export { default as computeToken } from './computeToken'
export * from './interface'
export { createTheme, defaultTheme, Theme }

import defaultDerivative from '../themes/default'
import createTheme from './createTheme'

const defaultTheme = createTheme(defaultDerivative)

export { default as computeToken } from './computeToken'
export * from './interface'
export { createTheme, defaultTheme }

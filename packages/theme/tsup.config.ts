import { defineConfig } from 'tsup'
import pkg from './package.json'

const bundles = Object.keys(pkg.dependencies)

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  sourcemap: true,
  clean: true,
  dts: true,
  noExternal: bundles
})

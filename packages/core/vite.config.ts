import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      tsconfigPath: './tsconfig.build.json',
      exclude: ['src/**/docs/**']
      // rollupTypes: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // https://github.com/vitejs/vite-ts-monorepo-rfc
      '@starry-ui/theme': fileURLToPath(
        new URL('../theme/src', import.meta.url)
      )
    }
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'StarryUICore',
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue']
    },
    minify: false
  }
})

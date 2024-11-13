import 'ant-design-vue/dist/reset.css'
import { createPinia } from 'pinia'
import 'virtual:uno.css'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './main.css'

export default {
  extends: DefaultTheme,
  Layout,
  async enhanceApp({
    //@ts-ignore
    app
  }) {
    const pinia = createPinia()
    app.use(pinia)

    if (!import.meta.env.SSR) {
      const AntConfig = await import('@/components/common/AntConfig.vue')
      app.component('AntConfig', AntConfig.default)

      const ThemeEditor = await import('@/components/theme-editor/index.vue')
      app.component('ThemeEditor', ThemeEditor.default)
    }
  }
}

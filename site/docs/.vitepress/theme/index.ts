import 'ant-design-vue/dist/reset.css'
import { createPinia } from 'pinia'
import 'virtual:uno.css'
import DefaultTheme from 'vitepress/theme'
import '../../../src/assets/main.css'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    const pinia = createPinia()
    app.use(pinia)
  }
}

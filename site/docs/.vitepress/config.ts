import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Starry UI',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '设计', link: '/design/theme' },
      { text: '开发', link: '/develop' },
      { text: '组件', link: '/components' },
      { text: '主题编辑', link: '/theme-editor' }
    ],

    sidebar: [
      {
        text: '设计',
        items: [
          {
            text: '主题',
            link: '/design/theme'
          },
          { text: '颜色', link: '/design/colors' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    plugins: [UnoCSS()]
  }
})

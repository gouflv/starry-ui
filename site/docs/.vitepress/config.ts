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
      { text: '设计', link: '/design/' },
      { text: '研发', link: '/develop/' },
      { text: '组件', link: '/components/' },
      { text: '主题编辑', link: '/theme-editor' }
    ],

    sidebar: {
      '/design/': [
        {
          text: '设计',
          items: [
            { text: '色彩', link: '/design/colors' },
            { text: '主题', link: '/design/theme' }
          ]
        }
      ],
      '/develop/': [
        {
          text: '研发',
          items: [{ text: '快速上手' }, { text: '主题定制' }]
        }
      ],
      '/components/': []
    },

    outline: {
      level: [2, 3]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    plugins: [UnoCSS()]
  }
})

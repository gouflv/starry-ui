import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Starry UI',
  description: 'A VitePress Site',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '设计', link: '/design/' },
      { text: '研发', link: '/develop/' },
      { text: '组件', link: '/components/' },
      { text: '工具', link: '/utilities/' },
      { text: '主题编辑', link: '/theme-editor' }
    ],

    sidebar: {
      '/design/': [
        {
          items: [
            { text: '设计规范', link: '/design/' },
            { text: '色彩', link: '/design/colors' }
          ]
        }
      ],
      '/develop/': [
        {
          items: [
            { text: 'Starry UI for Vue', link: '/develop/' },
            { text: '快速上手' }
          ]
        },
        {
          items: [
            { text: '主题', link: '/develop/theme' },
            { text: '快速上手' }
          ]
        },
        {
          items: [{ text: '主题定制' }]
        }
      ],
      '/components/': [
        {
          items: [{ text: '组件总览', link: '/components/' }]
        }
      ]
    },

    outline: {
      level: [2, 3]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    plugins: [
      //@ts-ignore
      UnoCSS()
    ]
  }
})

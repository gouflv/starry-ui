import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Starry UI',
  description: 'A VitePress Site',
  appearance: false,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '设计', link: '/design/' },
      { text: '研发', link: '/develop/' },
      { text: '主题编辑', link: '/theme-editor' },
      { text: '组件文档', link: '//starry-ui-sb.netlify.app/' }
    ],

    sidebar: {
      '/design/': [
        {
          items: [{ text: '介绍', link: '/design/' }]
        },
        {
          text: '样式',
          items: [
            { text: '色彩', link: '/design/colors' },
            { text: '布局' },
            { text: '字体' },
            { text: '图标' }
          ]
        },
        {
          text: '模版',
          items: []
        }
      ],
      '/develop/': [
        {
          items: [
            { text: 'Starry UI for Vue', link: '/develop/' },
            { text: '快速上手', link: '/develop/getting-started' },
            { text: '主题定制', link: '/develop/custom-theme' }
          ]
        },
        {
          text: '主题',
          items: [
            { text: '介绍', link: '/develop/theme-pkg/' },
            { text: '在项目中使用主题', link: '/develop/theme-pkg/usage' }
          ]
        },
        {
          text: '@starry-ui/theme',
          link: 'https://github.com/gouflv/starry-ui/tree/main/packages/theme/'
        }
      ]
    },

    outline: {
      level: [2, 3]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gouflv/starry-ui' }
    ]
  },
  vite: {
    plugins: [
      //@ts-ignore
      UnoCSS()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
        // '@starry-ui/theme': fileURLToPath(
        //   new URL('../../../packages/theme/src', import.meta.url)
        // ),
        // '@starry-ui/core': fileURLToPath(
        //   new URL('../../../packages/core/src', import.meta.url)
        // )
      }
    }
  },
  ignoreDeadLinks: true,
  lastUpdated: true,
  lang: 'zh-CN',
  outDir: '../dist'
})

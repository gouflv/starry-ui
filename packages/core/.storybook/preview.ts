import type { Preview } from '@storybook/vue3'
import Theme from './components/Theme.vue'
import './style.css'

const preview: Preview = {
  tags: ['!autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    options: {
      storySort: {
        order: [
          'Docs',
          '通用',
          '导航',
          '布局',
          '数据录入',
          '数据展示',
          '反馈',
          '其他'
        ]
      }
    }
  },
  decorators: [
    (story) => ({
      components: { story, Theme },
      template: `
        <Theme>
          <story />
        </Theme>
      `
    })
  ]
}

export default preview

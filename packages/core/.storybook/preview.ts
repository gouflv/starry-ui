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

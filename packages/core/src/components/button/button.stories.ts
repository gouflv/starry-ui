import type { Meta, StoryObj } from '@storybook/vue3'

import Button from './button.vue'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => ({
    components: { Button },
    template: '<Button v-bind="args">Button</Button>',
    setup() {
      return { args }
    }
  })
}

import type { Meta, StoryObj } from '@storybook/vue3'

import Button from './button.vue'

const meta: Meta<typeof Button> = {
  title: '通用/Button',
  component: Button
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => {
    return {
      components: { Button },
      template: '<Button>Default</Button>',
      setup() {
        return { args }
      }
    }
  }
}

export const Types: Story = {
  render: () => {
    return {
      components: { Button },
      template: `
        <div>
          <Button type="primary">Primary</Button>
          <Button type="link">Link</Button>
          <Button type="text">Text</Button>
          <Button type="default">Default</Button>
        </div>
      `
    }
  }
}

export const Size: Story = {
  render: () => {
    return {
      components: { Button },
      template: `
        <div>
          <Button size="small">Small</Button>
          <Button size="middle">Middle</Button>
          <Button size="large">Large</Button>
        </div>
        <div>
          <Button size="small" block>Small</Button>
          <Button size="middle" block>Middle</Button>
          <Button size="large" block>Large</Button>
        </div>
      `
    }
  }
}

export const Loading: Story = {
  render: () => {
    return {
      components: { Button },
      template: `
        <div>
          <Button loading>Loading</Button>
        </div>
      `
    }
  }
}

export const Disabled: Story = {
  render: () => {
    return {
      components: { Button },
      template: `
        <div>
          <Button disabled>Disabled</Button>
          <Button disabled type="primary">Disabled</Button>
          <Button disabled type="link">Disabled</Button>
          <Button disabled type="text">Disabled</Button>
        </div>
      `
    }
  }
}

export const Danger: Story = {
  render: () => {
    return {
      components: { Button },
      template: `
        <div>
          <Button danger>Danger</Button>
          <Button danger type="primary">Danger</Button>
          <Button danger type="link">Danger</Button>
          <Button danger type="text">Danger</Button>
        </div>
      `
    }
  }
}

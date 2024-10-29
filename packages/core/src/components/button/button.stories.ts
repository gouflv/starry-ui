import { QuestionCircleOutlined } from '@ant-design/icons-vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { h, ref } from 'vue'
import Button from './button'

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
      template: '<Button v-bind="args">Default</Button>',
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
        <div class="cell">
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
        <div class="cell">
          <Button size="small">Small</Button>
          <Button size="middle">Middle</Button>
          <Button size="large">Large</Button>
        </div>
        <div class="cell">
          <Button size="small" block>Small</Button>
          <Button size="middle" block>Middle</Button>
          <Button size="large" block>Large</Button>
        </div>
      `
    }
  }
}

export const Loading: Story = {
  render: (args) => {
    return {
      components: { Button, QuestionCircleOutlined },
      template: `
        <div class="cell">
          <Button :loading="loading" @click="loading=true">Loading</Button>
          <a @click="loading=!loading">toggle</a>
        </div>
      `,
      setup() {
        const loading = ref(false)
        return { loading }
      }
    }
  },
  args: { loading: true }
}

export const Icon: Story = {
  render: (args) => {
    return {
      components: { Button, QuestionCircleOutlined },
      template: `
        <div class="cell">
          <Button v-bind="args" :icon="icon" type="primary">
            Button
          </Button>
          <Button v-bind="args">
            <QuestionCircleOutlined v-slot:icon/>
            Button
          </Button>
        </div>
      `,
      setup() {
        const icon = h(QuestionCircleOutlined)
        return { args, icon }
      }
    }
  }
}

export const Disabled: Story = {
  render: () => {
    return {
      components: { Button },
      template: `
        <div class="cell">
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
        <div class="cell">
          <Button danger>Danger</Button>
          <Button danger type="primary">Danger</Button>
          <Button danger type="link">Danger</Button>
          <Button danger type="text">Danger</Button>
        </div>
        <div class="cell">
          <Button danger disabled>Danger</Button>
          <Button danger type="primary" disabled>Danger</Button>
          <Button danger type="link" disabled>Danger</Button>
          <Button danger type="text" disabled>Danger</Button>
        </div>
      `
    }
  }
}

export const Shape: Story = {
  render: () => {
    return {
      components: { Button, QuestionCircleOutlined },
      template: `
        <div class="cell">
          <Button shape="round">Round</Button>
          <Button shape="circle">A</Button>
          <Button shape="circle" :icon="icon"></Button>
        </div>
      `,
      setup() {
        const icon = h(QuestionCircleOutlined)
        return { icon }
      }
    }
  }
}

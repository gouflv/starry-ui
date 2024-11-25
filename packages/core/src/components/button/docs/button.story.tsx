import { QuestionCircleOutlined } from '@ant-design/icons-vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { h, ref } from 'vue'
import Button from '../Button'

const meta: Meta<typeof Button> = {
  title: '通用/Button',
  component: Button
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => ({
    setup() {
      return () => <Button {...args}>Button</Button>
    }
  })
}

export const Types: Story = {
  render: () => ({
    components: { Button },
    setup() {
      return () => (
        <div class="cell">
          <Button type="primary">Primary</Button>
          <Button type="link">Link</Button>
          <Button type="text">Text</Button>
          <Button type="default">Default</Button>
        </div>
      )
    }
  })
}

export const Size: Story = {
  render: () => ({
    components: { Button },
    setup() {
      return () => (
        <>
          <div class="cell">
            <Button size="small">Small</Button>
            <Button size="middle">Middle</Button>
            <Button size="large">Large</Button>
          </div>
          <div class="cell">
            <Button size="small" block>
              Small
            </Button>
            <Button size="middle" block>
              Middle
            </Button>
            <Button size="large" block>
              Large
            </Button>
          </div>
        </>
      )
    }
  })
}

export const Loading: Story = {
  render: (args) => ({
    components: { Button, QuestionCircleOutlined },
    setup() {
      const loading = ref(false)
      return () => (
        <div class="cell">
          <Button
            loading={loading.value}
            onClick={() => (loading.value = true)}
          >
            Click me
          </Button>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              loading.value = !loading.value
            }}
          >
            toggle
          </a>
        </div>
      )
    }
  }),
  args: { loading: true }
}

export const Icon: Story = {
  render: (args) => ({
    components: { Button, QuestionCircleOutlined },
    setup() {
      const icon = h(QuestionCircleOutlined)
      return () => (
        <div class="cell">
          <Button {...args} icon={icon} type="primary">
            Button
          </Button>
          <Button
            {...args}
            v-slots={{ icon: () => <QuestionCircleOutlined /> }}
          >
            Button
          </Button>
        </div>
      )
    }
  })
}

export const Disabled: Story = {
  render: () => ({
    components: { Button },
    setup() {
      return () => (
        <div class="cell">
          <Button disabled>Disabled</Button>
          <Button disabled type="primary">
            Disabled
          </Button>
          <Button disabled type="link">
            Disabled
          </Button>
          <Button disabled type="text">
            Disabled
          </Button>
        </div>
      )
    }
  })
}

export const Danger: Story = {
  render: () => ({
    components: { Button },
    setup() {
      return () => (
        <>
          <div class="cell">
            <Button danger>Danger</Button>
            <Button danger type="primary">
              Danger
            </Button>
            <Button danger type="link">
              Danger
            </Button>
            <Button danger type="text">
              Danger
            </Button>
          </div>
          <div class="cell">
            <Button danger disabled>
              Danger
            </Button>
            <Button danger type="primary" disabled>
              Danger
            </Button>
            <Button danger type="link" disabled>
              Danger
            </Button>
            <Button danger type="text" disabled>
              Danger
            </Button>
          </div>
        </>
      )
    }
  })
}

export const Shape: Story = {
  render: () => ({
    components: { Button, QuestionCircleOutlined },
    setup() {
      const icon = h(QuestionCircleOutlined)
      return () => (
        <div class="cell">
          <Button shape="round">Round</Button>
          <Button shape="circle">A</Button>
          <Button shape="circle" icon={icon}></Button>
        </div>
      )
    }
  })
}

export const Href: Story = {
  render: () => ({
    components: { Button },
    setup() {
      return () => (
        <div class="cell">
          <Button type="primary" href="https://www.bing.com" target="_blank">
            Bing
          </Button>
          <Button href="https://www.bing.com" target="_blank">
            Bing
          </Button>
        </div>
      )
    }
  })
}

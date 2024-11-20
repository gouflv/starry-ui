import Button from '@/components/button'
import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Dialog from '../Dialog'

const meta: Meta<typeof Dialog> = {
  title: '反馈/Dialog',
  component: Dialog
}

export default meta
type Story = StoryObj<typeof Dialog>

const SimpleContent = (
  <div>
    <p>Dialog Content</p>
  </div>
)

export const Default: Story = {
  render: (args) => ({
    setup() {
      return () => (
        <Dialog title="Modal" {...args}>
          {{
            trigger: () => <Button>Open</Button>,
            default: () => SimpleContent
          }}
        </Dialog>
      )
    }
  })
}

export const Controlled: Story = {
  render: (args) => ({
    setup() {
      const open = ref(false)
      return () => (
        <>
          <Dialog
            open={open.value}
            onUpdate:open={(value) => (open.value = value)}
          >
            {{
              default: () => SimpleContent
            }}
          </Dialog>
          <p>
            <Button onClick={() => (open.value = true)}>Open</Button>
          </p>
        </>
      )
    }
  })
}

export const Scroll: Story = {
  render: (args) => ({
    setup() {
      const open = ref(false)
      return () => (
        <>
          <Dialog
            open={open.value}
            onUpdate:open={(value) => (open.value = value)}
          >
            {{
              default: () => (
                <div>
                  <div style={{ height: '100vh' }}></div>
                  <div style={{ padding: '0 24px' }}>Content</div>
                </div>
              )
            }}
          </Dialog>
          <p>
            <Button onClick={() => (open.value = true)}>Open</Button>
          </p>
        </>
      )
    }
  })
}

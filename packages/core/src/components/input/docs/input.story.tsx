import type { Meta, StoryObj } from '@storybook/vue3'
import Input from '../Input'

const meta: Meta<typeof Input> = {
  title: '数据录入/Input',
  component: Input
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: (args) => ({
    setup() {
      return () => (
        <Input {...args} placeholder="Input" style={{ width: '100px' }} />
      )
    }
  })
}

export const Disabled: Story = {
  render: (args) => ({
    setup() {
      return () => <Input {...args} disabled style={{ width: '100px' }} />
    }
  })
}

export const Clearable: Story = {
  render: (args) => ({
    setup() {
      return () => (
        <Input {...args} value="Lorem" allowClear style={{ width: '100px' }} />
      )
    }
  })
}

export const Size: Story = {
  render: (args) => ({
    setup() {
      return () => (
        <div style={{ width: '100px' }}>
          {[
            <Input size="small" placeholder="Small" />,
            <Input size="middle" placeholder="Middle" />,
            <Input size="large" placeholder="Large" />
          ].map((item, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              {item}
            </div>
          ))}
        </div>
      )
    }
  })
}

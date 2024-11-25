import type { Meta, StoryObj } from '@storybook/vue3'
import Text from '../text/Text'

const meta: Meta<typeof Text> = {
  title: '通用/Typography.Text',
  component: Text
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {
  render: (args) => ({
    setup() {
      const texts = [
        <Text content="Text"></Text>,
        <Text strong content="Strong"></Text>,
        <Text type="primary" content="Primary"></Text>,
        <Text type="secondary" content="Secondary"></Text>,
        <Text type="success" content="Success"></Text>,
        <Text type="warning" content="Warning"></Text>,
        <Text type="danger" content="Danger"></Text>,
        <Text type="disabled" content="Disabled"></Text>
      ]
      return () =>
        texts.map((text) => (
          <div
            style={{
              marginBottom: '1em'
            }}
          >
            {text}
          </div>
        ))
    }
  })
}

export const Ellipsis: Story = {
  render: (args) => ({
    setup() {
      return () => (
        <div style={{ width: '200px' }}>
          <h4>Single Line</h4>
          <Text
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ellipsis={true}
          ></Text>

          <h4>Multi Line</h4>
          <Text
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ellipsis={{ rows: 3 }}
          ></Text>
        </div>
      )
    }
  })
}

export const Expandable: Story = {
  render: (args) => ({
    setup() {
      return () => <div style={{ width: '200px' }}>TODO</div>
    }
  })
}

import type { Meta, StoryObj } from '@storybook/vue3'
import Text from '../Text'

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
        <Text>Text</Text>,
        <Text strong>Strong</Text>,
        <Text type="primary">Primary</Text>,
        <Text type="secondary">Secondary</Text>,
        <Text type="success">Success</Text>,
        <Text type="warning">Warning</Text>,
        <Text type="danger">Danger</Text>,
        <Text type="disabled">Disabled</Text>,
        <Text href="https://bing.com" target="_blank">
          Link
        </Text>
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

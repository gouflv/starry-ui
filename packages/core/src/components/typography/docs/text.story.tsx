import type { Meta, StoryObj } from '@storybook/vue3'
import Text from '../text/Text'

const meta: Meta<typeof Text> = {
  title: '通用/Typography',
  component: Text
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {
  render: (args) => ({
    setup() {
      const texts = [
        <Text {...args} content="Text"></Text>,
        <Text {...args} strong content="Strong"></Text>,
        <Text {...args} type="primary" content="Primary"></Text>,
        <Text {...args} type="secondary" content="Secondary"></Text>,
        <Text {...args} type="success" content="Success"></Text>,
        <Text {...args} type="warning" content="Warning"></Text>,
        <Text {...args} type="danger" content="Danger"></Text>,
        <Text {...args} type="disabled" content="Disabled"></Text>
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

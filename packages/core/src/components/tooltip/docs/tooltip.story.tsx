import { Button } from '@/components/button'
import { type Meta, type StoryObj } from '@storybook/vue3'
import Tooltip from '../Tooltip.vue'

const meta: Meta<typeof Tooltip> = {
  title: '反馈/Tooltip',
  component: Tooltip
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: (args) => ({
    setup() {
      return () => (
        <div>
          <Tooltip {...args} title="Lorem ipsum dolor sit amet">
            {{ default: () => <Button>Hover me</Button> }}
          </Tooltip>

          <div style={{ height: '300px' }}></div>

          <Tooltip {...args} title="Lorem ipsum dolor sit amet">
            {{ default: () => <Button>Hover me</Button> }}
          </Tooltip>
        </div>
      )
    }
  })
}

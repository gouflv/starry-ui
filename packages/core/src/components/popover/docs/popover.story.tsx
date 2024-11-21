import { type Meta, type StoryObj } from '@storybook/vue3'
import Popover from '../Popover.vue'

const meta: Meta<typeof Popover> = {
  title: '反馈/Popover',
  component: Popover
}

export default meta
type Story = StoryObj<typeof Popover>

const SimpleContent = (
  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
)

export const Default: Story = {
  render: (args) => ({
    setup() {
      return () => (
        <div>
          <Popover {...args} title="Lorem ipsum dolor sit amet">
            {{
              trigger: () => <button>Click me</button>,
              content: () => SimpleContent
            }}
          </Popover>

          <div style={{ height: '300px' }}></div>

          <Popover
            {...args}
            title="Lorem ipsum dolor sit amet"
            placement="right"
            overlayStyle={{ width: '200px' }}
          >
            {{
              trigger: () => <button>Placement right</button>,
              content: () => SimpleContent
            }}
          </Popover>

          <div style={{ height: '300px' }}></div>

          <Popover
            {...args}
            title="Lorem ipsum dolor sit amet"
            placement="left"
            overlayStyle={{ width: '200px' }}
          >
            {{
              trigger: () => <button>Placement auto fix</button>,
              content: () => SimpleContent
            }}
          </Popover>
        </div>
      )
    }
  })
}

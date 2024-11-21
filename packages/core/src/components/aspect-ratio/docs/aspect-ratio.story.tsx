import { type Meta, type StoryObj } from '@storybook/vue3'
import AspectRatio from '..'

const meta: Meta<typeof AspectRatio> = {
  title: '通用/AspectRatio',
  component: AspectRatio
}

export default meta
type Story = StoryObj<typeof AspectRatio>

export const Default: Story = {
  render: (args) => ({
    setup() {
      return () => (
        <div style={{ width: '100px' }}>
          <h3>2/3</h3>
          <AspectRatio ratio={2 / 3}>
            <img
              src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            ></img>
          </AspectRatio>

          <h3>16:9</h3>
          <AspectRatio ratio={16 / 9}>
            <img
              src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            ></img>
          </AspectRatio>
        </div>
      )
    }
  })
}

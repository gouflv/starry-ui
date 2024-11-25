import type { Meta, StoryObj } from '@storybook/vue3'
import Text from '../../text/Text'
import Title from '../Title'

const meta: Meta<typeof Title> = {
  title: '通用/Typography.Title',
  component: Title
}

export default meta
type Story = StoryObj<typeof Title>

export const Default: Story = {
  render: (args) => ({
    setup() {
      return () => (
        <>
          <div style={{ marginBottom: '48px' }}>
            <Title level={1}>标题1</Title>
            <Title level={2}>标题2</Title>
            <Title level={3}>标题3</Title>
            <Title level={4}>标题4</Title>
            <Title level={5}>标题5</Title>
          </div>

          <div>
            <Title level={2}>标题</Title>
            <p>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio ut a harum. Totam nulla rerum est enim labore
                repudiandae voluptate ducimus, porro necessitatibus, expedita
                quia odio illo deserunt, sunt vero placeat magnam! Veniam saepe
                sapiente totam dolorum nulla similique quae provident a, et qui,
                ea maiores. Ea hic laborum mollitia.
              </Text>
            </p>
          </div>
        </>
      )
    }
  })
}

import type { Meta, StoryObj } from '@storybook/vue3'
import Table from '../table.vue'
import type { ColumnType } from '../types'

const meta: Meta<typeof Table> = {
  title: '数据展示/Table',
  component: Table as any
}

export default meta
type Story = StoryObj<typeof Table>

type Data = { id: number; name: string; age: number }

const defaultColumns: ColumnType<Data>[] = [
  { title: 'ID', dataIndex: 'id' },
  { title: 'Name', dataIndex: 'name' },
  { title: 'Age', dataIndex: 'age' },
  { title: 'Action', key: 'action' }
]

const defaultDataSource: Data[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Name ${i + 1}`,
  age: 20 + i
}))

export const Default: Story = {
  render: (args) => {
    return {
      setup() {
        return () => (
          <Table<Data>
            columns={defaultColumns}
            dataSource={defaultDataSource}
            {...(args as any)}
          />
        )
      }
    }
  }
}

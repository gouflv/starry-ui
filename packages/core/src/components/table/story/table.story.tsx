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

const defaultDataSource: Data[] = Array.from({ length: 10 }, (_, i) => ({
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
            {...(args as any)}
            columns={defaultColumns}
            dataSource={defaultDataSource}
          />
        )
      }
    }
  }
}

export const Bordered: Story = {
  render: (args) => {
    return {
      setup() {
        return () => (
          <Table<Data>
            {...(args as any)}
            columns={defaultColumns}
            dataSource={defaultDataSource}
            bordered
          />
        )
      }
    }
  }
}

export const Size: Story = {
  render: (args) => {
    return {
      setup() {
        return () => (
          <>
            <div style="margin-bottom: 20px">
              <h3>Middle</h3>
              <Table<Data>
                {...(args as any)}
                columns={defaultColumns}
                dataSource={defaultDataSource.slice(0, 5)}
                size="middle"
              />
            </div>
            <div>
              <h3>Small</h3>
              <Table<Data>
                {...(args as any)}
                columns={defaultColumns}
                dataSource={defaultDataSource.slice(0, 5)}
                size="small"
              />
            </div>
          </>
        )
      }
    }
  }
}

export const ColumnDef: Story = {
  render: (args) => {
    return {
      setup() {
        return () => (
          <>
            <h3>DataIndex paths and CustomRender</h3>
            <Table<{
              id: number
              user?: { name: string }
              address: { name: string }[]
            }>
              {...(args as any)}
              columns={[
                { title: 'ID', dataIndex: 'id' },
                {
                  title: 'Name',
                  dataIndex: 'user.name',
                  customRender: ({ text, column }) =>
                    text ||
                    `Value not found by accessor \`${column.dataIndex}\``
                },
                {
                  title: 'Address',
                  dataIndex: 'address.[0].name',
                  customRender: ({ text, column }) =>
                    text ||
                    `Value not found by accessor \`${column.dataIndex}\``
                },
                {
                  title: 'Action',
                  key: 'action',
                  width: 100
                }
              ]}
              dataSource={[
                {
                  id: 1,
                  user: {
                    name: 'Name 1'
                  },
                  address: [{ name: 'Address 1' }]
                },
                {
                  id: 2
                }
              ]}
            />
          </>
        )
      }
    }
  }
}

export const Ellipsis: Story = {
  render: (args) => {
    return {
      setup() {
        return () => (
          <Table<{
            id: number
            name: string
            age: number
          }>
            {...(args as any)}
            columns={[
              { title: 'ID', dataIndex: 'id' },
              { title: 'Name', dataIndex: 'name', width: 80, ellipsis: true },
              { title: 'Age', dataIndex: 'age' }
            ]}
            dataSource={Array.from({ length: 50 }, (_, i) => ({
              id: i + 1,
              name: `Name ${i + 1} lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusantium ipsam.`,
              age: i + 1
            }))}
          />
        )
      }
    }
  }
}

export const Scroll: Story = {
  render: (args) => {
    return {
      setup() {
        const data = Array.from({ length: 20 }, (_, i) => ({
          id: i + 1,
          ...Array.from({ length: 10 }, (_, j) => ({
            [`name${j + 1}`]: `Name ${j + 1} lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusantium ipsam.`
          })).reduce((acc, cur) => ({ ...acc, ...cur }), {}),
          age: 20 + i
        }))

        return () => (
          <>
            <h3>Layout auto</h3>
            <Table
              {...(args as any)}
              columns={[
                { title: 'ID', dataIndex: 'id' },
                ...Array.from({ length: 10 }, (_, i) => ({
                  title: `Name ${i + 1}`,
                  dataIndex: `name${i + 1}`
                })),
                { title: 'Age', dataIndex: 'age' }
              ]}
              dataSource={data}
            />

            <h3>Fixed width</h3>
            <Table
              {...(args as any)}
              columns={[
                { title: 'ID', dataIndex: 'id' },
                ...Array.from({ length: 10 }, (_, i) => ({
                  title: `Name ${i + 1}`,
                  dataIndex: `name${i + 1}`
                })),
                { title: 'Age', dataIndex: 'age' }
              ]}
              dataSource={data}
              tableLayout={'fixed'}
            />

            <h3>Ellipsis</h3>
            <Table
              {...(args as any)}
              columns={[
                { title: 'ID', dataIndex: 'id' },
                ...Array.from({ length: 10 }, (_, i) => ({
                  title: `Name ${i + 1}`,
                  dataIndex: `name${i + 1}`,
                  ellipsis: true
                })),
                { title: 'Age', dataIndex: 'age' }
              ]}
              dataSource={data}
            />

            <h3>Scroll X</h3>
            <Table
              {...(args as any)}
              scroll={{ x: 500 }}
              columns={[
                { title: 'ID', dataIndex: 'id' },
                ...Array.from({ length: 10 }, (_, i) => ({
                  title: `Name ${i + 1}`,
                  dataIndex: `name${i + 1}`,
                  ellipsis: true
                })),
                { title: 'Age', dataIndex: 'age' }
              ]}
              dataSource={data}
            />
          </>
        )
      }
    }
  },
  args: {
    scroll: { x: 500, y: 300 }
  }
}

export const FixedColumns: Story = {
  render: (args) => {
    return {
      setup() {
        const data = Array.from({ length: 20 }, (_, i) => ({
          id: i + 1,
          ...Array.from({ length: 10 }, (_, j) => ({
            [`name${j + 1}`]: `Name ${j + 1}`
          })).reduce((acc, cur) => ({ ...acc, ...cur }), {}),
          age: 20 + i
        }))

        return () => (
          <>
            <h3>Fixed first</h3>
            <Table
              {...(args as any)}
              columns={[
                { title: 'ID', dataIndex: 'id', fixed: true },
                ...Array.from({ length: 10 }, (_, i) => ({
                  title: `Name ${i + 1}`,
                  dataIndex: `name${i + 1}`,
                  ellipsis: true
                })),
                { title: 'Age', dataIndex: 'age', fixed: 'right' }
              ]}
              dataSource={data}
            />
          </>
        )
      }
    }
  },
  args: {
    scroll: { x: 500, y: 300 }
  }
}

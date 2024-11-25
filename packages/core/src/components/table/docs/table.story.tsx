import type { Meta, StoryObj } from '@storybook/vue3'
import { Table, type ColumnType, type TableBodySlotsProps } from '..'

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
  { title: 'Age', dataIndex: 'age' }
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
            {...args}
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
            {...args}
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
                {...args}
                columns={defaultColumns}
                dataSource={defaultDataSource.slice(0, 5)}
                size="middle"
              />
            </div>
            <div>
              <h3>Small</h3>
              <Table<Data>
                {...args}
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
        const data: any[] = [
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
        ]
        return () => (
          <>
            <h3>Data index</h3>
            <Table<{
              id: number
              user?: { name: string }
              address: { name: string }[]
            }>
              {...args}
              columns={[
                { title: 'ID', dataIndex: 'id' },
                {
                  title: 'Name (user.name)',
                  dataIndex: 'user.name',
                  customRender: ({ text }) => text || '-'
                },
                {
                  title: 'Address (address[0].name)',
                  dataIndex: 'address[0].name',
                  customRender: ({ text }) =>
                    text || <span style="color:#e21">empty</span>
                }
              ]}
              dataSource={data}
            />

            <h3>Custom render slot</h3>
            <Table<{
              id: number
              user?: { name: string }
              address: { name: string }[]
            }>
              {...args}
              columns={[
                { title: 'ID', dataIndex: 'id' },
                {
                  title: 'Name (user.name)',
                  dataIndex: 'user.name'
                },
                {
                  title: 'Address (Custom slot)',
                  dataIndex: 'address'
                }
              ]}
              dataSource={data}
            >
              {{
                bodyCell: ({ column, record, text }: TableBodySlotsProps) => {
                  if (column.dataIndex === 'user.name') {
                    return text || '-'
                  }
                  if (column.dataIndex === 'address') {
                    return JSON.stringify(record)
                  }
                }
              }}
            </Table>
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
            {...args}
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
        const data: any[] = Array.from({ length: 20 }, (_, i) => ({
          id: i + 1,
          ...Array.from({ length: 10 }, (_, j) => ({
            [`name${j + 1}`]: `Name ${j + 1} lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusantium ipsam.`
          })).reduce((acc, cur) => ({ ...acc, ...cur }), {}),
          age: 20 + i
        }))

        return () => (
          <>
            <h3>Default</h3>
            <Table
              {...args}
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

            <h3>Auto layout</h3>
            <Table
              {...args}
              columns={[
                { title: 'ID', dataIndex: 'id' },
                ...Array.from({ length: 10 }, (_, i) => ({
                  title: `Name ${i + 1}`,
                  dataIndex: `name${i + 1}`
                })),
                { title: 'Age', dataIndex: 'age' }
              ]}
              dataSource={data}
              tableLayout="auto"
            />

            <h3>Ellipsis</h3>
            <Table
              {...args}
              columns={[
                { title: 'ID', dataIndex: 'id' },
                ...Array.from({ length: 10 }, (_, i) => ({
                  title: `Name ${i + 1}`,
                  dataIndex: `name${i + 1}`,
                  ellipsis: true
                })),
                { title: 'Age', dataIndex: 'age', width: 80 }
              ]}
              dataSource={data}
            />

            <h3>Scroll X only</h3>
            <Table
              {...args}
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
        const data: any[] = Array.from({ length: 20 }, (_, i) => ({
          id: i + 1,
          ...Array.from({ length: 10 }, (_, j) => ({
            [`name${j + 1}`]: `Name ${j + 1}`
          })).reduce((acc, cur) => ({ ...acc, ...cur }), {}),
          age: 20 + i
        }))
        return () => (
          <>
            <h3>Fixed</h3>
            <Table
              {...args}
              columns={[
                { title: 'ID', dataIndex: 'id', fixed: true },
                ...Array.from({ length: 10 }, (_, i) => ({
                  title: `Name ${i + 1}`,
                  dataIndex: `name${i + 1}`,
                  ellipsis: true,
                  fixed: !i
                })),
                { title: 'Age', dataIndex: 'age', fixed: 'right', width: 80 },
                { title: 'Action', key: 'action', fixed: 'right', width: 80 }
              ]}
              dataSource={data}
              scroll={{ x: 500, y: 300 }}
            />

            <h3>Scroll X only</h3>
            <Table
              {...args}
              columns={[
                { title: 'ID', dataIndex: 'id', fixed: true },
                ...Array.from({ length: 10 }, (_, i) => ({
                  title: `Name ${i + 1}`,
                  dataIndex: `name${i + 1}`,
                  ellipsis: true,
                  fixed: !i
                })),
                { title: 'Age', dataIndex: 'age', fixed: 'right', width: 80 },
                { title: 'Action', key: 'action', fixed: 'right', width: 80 }
              ]}
              dataSource={data}
              scroll={{ x: 500 }}
            />
          </>
        )
      }
    }
  }
}

export const Grouping: Story = {
  render: (args) => {
    return {
      setup() {
        return () => (
          <>
            <h3>Header Group</h3>
            <Table
              {...args}
              columns={[
                {
                  title: 'ID',
                  dataIndex: 'id'
                },
                {
                  title: 'Name',
                  children: [
                    { title: 'First Name', dataIndex: 'firstName' },
                    { title: 'Last Name', dataIndex: 'lastName' }
                  ]
                },
                {
                  title: 'Info',
                  children: [
                    { title: 'Age', dataIndex: 'age' },
                    { title: 'Address', dataIndex: 'address' }
                  ]
                }
              ]}
              dataSource={[
                {
                  id: 1,
                  firstName: 'John',
                  lastName: 'Brown',
                  age: 32,
                  address: 'New York No. 1 Lake Park'
                },
                {
                  id: 2,
                  firstName: 'Jim',
                  lastName: 'Green',
                  age: 42,
                  address: 'London No. 1 Lake Park'
                }
              ]}
            />

            <h3>Fixed</h3>
            <Table
              {...args}
              columns={[
                {
                  title: 'ID',
                  dataIndex: 'id',
                  fixed: true
                },
                {
                  title: 'Name',
                  children: [
                    { title: 'First Name', dataIndex: 'firstName', width: 300 },
                    { title: 'Last Name', dataIndex: 'lastName', width: 300 }
                  ]
                },
                {
                  title: 'Info',
                  children: [
                    { title: 'Age', dataIndex: 'age', width: 300 },
                    { title: 'Address', dataIndex: 'address', width: 300 }
                  ]
                },
                { title: 'Action', key: 'action', fixed: 'right', width: 80 }
              ]}
              dataSource={[
                {
                  id: 1,
                  firstName: 'John',
                  lastName: 'Brown',
                  age: 32,
                  address: 'New York No. 1 Lake Park'
                },
                {
                  id: 2,
                  firstName: 'Jim',
                  lastName: 'Green',
                  age: 42,
                  address: 'London No. 1 Lake Park'
                }
              ]}
              scroll={{ x: 500 }}
            />
          </>
        )
      }
    }
  }
}

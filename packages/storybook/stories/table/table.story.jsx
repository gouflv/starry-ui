import { Table } from '@starry-ui/components'

export default {
  title: 'Data Display/Table',
  component: Table,
  argTypes: {
    bordered: {},
  },
  args: {},
}

const Template = (args, { argTypes }) => ({
  components: { Table },
  props: Object.keys(argTypes),
  template: `
    <Table v-bind="$props" />
  `,
})

const defaultColumns = [
  { title: 'ID', dataIndex: 'id' },
  { title: 'Name', dataIndex: 'name' },
  { title: 'Age', dataIndex: 'age' },
]

const defaultDataSource = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Name ${i + 1}`,
  age: 20 + i,
}))

export const Default = Template.bind({})
Default.args = {
  columns: defaultColumns,
  dataSource: defaultDataSource,
}

export const Bordered = Template.bind({})
Bordered.args = {
  bordered: true,
  columns: defaultColumns,
  dataSource: defaultDataSource,
}

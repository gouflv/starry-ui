## Props

| 名称         | 说明               | 类型                              | 默认值  |
| ------------ | ------------------ | --------------------------------- | ------- |
| bordered     | 是否显示边框       | boolean                           | false   |
| columns      | 表格列配置         | ColumnType[] \| GroupColumnType[] |         |
| dataSource   | 表格数据源         | array                             |         |
| emptyText    | 空数据时显示的文本 | string                            |         |
| loading      | 是否加载中         | boolean                           | false   |
| pagination   | 分页器配置         | boolean \| object                 |         |
| rowKey       | 表格行 key 的取值  | string \| ((record) => string)    | 'id'    |
| rowSelection | 行选择配置         | SelectionType                     |         |
| scroll       | 表格滚动配置       | ScrollType                        |         |
| size         | 表格大小           | 'small' \| 'middle' \| 'large'    | 'large' |
| tableLayout  | 表格布局           | 'auto' \| 'fixed'                 |         |

### ColumnType

| 名称         | 说明                       | 类型                                                | 默认值 |
| ------------ | -------------------------- | --------------------------------------------------- | ------ |
| align        | 对齐方式                   | 'left' \| 'center' \| 'right'                       | 'left' |
| customRender | 自定义渲染函数             | (options: { text, record, index, column }) => vnode |        |
| dataIndex    | 列数据在数据项中对应的路径 | string                                              |        |
| fixed        | 是否固定                   | true \| 'left' \| 'right'                           |        |
| key          | key值                      | string                                              |        |
| maxWidth     | 最大列宽度                 | number                                              |        |
| minWidth     | 最小列宽度                 | number                                              |        |
| title        | 列头显示文字               | string                                              |        |
| width        | 列宽度                     | number                                              |        |

### GroupColumnType

| 名称     | 说明         | 类型         | 默认值 |
| -------- | ------------ | ------------ | ------ |
| children | 子列配置     | ColumnType[] |        |
| title    | 列头显示文字 | string       |        |

### ScrollType

### SelectionType

## Events

| 名称                  | 说明                   | 回调参数               |
| --------------------- | ---------------------- | ---------------------- |
| rowSelection.onChange | 选中项发生变化时的回调 | function(selectedRows) |

## Slots

| 名称     | 说明             | 参数                            |
| -------- | ---------------- | ------------------------------- |
| bodyCell | 自定义单元格内容 | { text, record, index, column } |
| empty    | 自定义空数据展示 |                                 |

## Props

| 名称                | 说明                                                                                                           | 类型                                        | 默认值    |
| ------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | --------- |
| open                | 是否打开下拉菜单                                                                                               | boolean                                     | false     |
| value               | 选中的值                                                                                                       | string \| number                            |           |
| options             | 选择框的选项                                                                                                   | array<option>                               | []        |
| loading             | 是否显示加载状态                                                                                               | boolean                                     | false     |
| allowClear          | 是否允许清除选择                                                                                               | boolean                                     | false     |
| autoFocus           | 是否自动聚焦                                                                                                   | boolean                                     | false     |
| disabled            | 是否禁用选择框                                                                                                 | boolean                                     | false     |
| bordered            | 是否显示边框                                                                                                   | boolean                                     | true      |
| size                | 选择框的大小                                                                                                   | string                                      | medium    |
| listHeight          | 选项列表的高度                                                                                                 | number                                      | 256       |
| placeholder         | 占位符文本                                                                                                     | string                                      | 请选择    |
| dropdownWidth       | 下拉菜单的宽度，可传入数值或字符串。当传入 'select' 时，下拉菜单和选择器同宽。                                 | string \| number                            | select    |
| noFoundContent      | 未找到选项时显示的内容                                                                                         | string                                      | 暂无数据  |
| placement           | 下拉菜单的位置                                                                                                 | string                                      | undefined |
| showSearch          | 是否显示搜索框                                                                                                 | boolean                                     | false     |
| filterOption        | 根据输入关键字过滤本地选项。当为 `false` 时，禁用过滤，当为 `true` 时，按 label 字段匹配，也可传入自定义方法。 | boolean \| function(input, option): boolean | true      |
| searchEventDebounce | 搜索事件的防抖时间(ms)                                                                                         | number                                      | 300       |

## Events

| 名称         | 说明                 | 回调参数        |
| ------------ | -------------------- | --------------- |
| update:open  | 下拉菜单开关时触发   | function(open)  |
| update:value | 选中值发生变化时触发 | function(value) |
| search       | 搜索时触发           | function(input) |

## Slots

| 名称   | 说明           | 插槽数据   |
| ------ | -------------- | ---------- |
| option | 自定义选项内容 | { option } |

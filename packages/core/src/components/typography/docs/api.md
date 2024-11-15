## Text

### Props

| 名称     | 类型                                                                         | 描述     | 默认值 |
| -------- | ---------------------------------------------------------------------------- | -------- | ------ |
| strong   | boolean                                                                      | 是否加粗 |        |
| type     | 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'disabled' | 文本类型 |        |
| ellipsis | EllipsisType                                                                 | 折叠选项 |        |

### EllipsisType

| 名称       | 类型       | 描述             | 默认值 |
| ---------- | ---------- | ---------------- | ------ |
| rows       | number     | 折叠行数         |        |
| expandable | boolean    | 是否可展开       | false  |
| symbol     | string     | 展开按钮描述文案 | '展开' |
| onEllipsis | () => void | 折叠回调         |        |
| onExpand   | () => void | 展开回调         |        |

## Title

### Props

| 名称  | 类型   | 描述             | 默认值 |
| ----- | ------ | ---------------- | ------ |
| level | number | 标题等级 h1...h5 | 1      |

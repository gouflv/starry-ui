## Props

| 名称     | 说明                                                                  | 类型                                                                         | 默认值 |
| -------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------ |
| strong   | 是否加粗                                                              | boolean                                                                      |        |
| type     | 文本类型                                                              | 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'disabled' |        |
| ellipsis | 折叠选项，当传入 `true` 时，将设置为 `{ rows: 1, expandable: false }` | boolean \|EllipsisType                                                       |        |

### EllipsisType

| 名称       | 类型            | 描述             | 默认值 |
| ---------- | --------------- | ---------------- | ------ |
| rows       | number          | 折叠行数         | 1      |
| expandable | boolean         | 是否可展开       | false  |
| symbol     | string \| vnode | 展开按钮描述文案 | '展开' |
| onEllipsis | () => void      | 折叠回调         |        |
| onExpand   | () => void      | 展开回调         |        |

### AnchorHTMLAttributes

支持传入 `AnchorHTMLAttributes` 的所有属性，如 `href`、`target` 等。

## Props

| 名称         | 说明             | 类型                                   | 默认值 |
| ------------ | ---------------- | -------------------------------------- | ------ |
| container    | 容器             | string \| HTMLElement                  |        |
| delay        | 延迟，单位：毫秒 | number                                 | 100    |
| disabled     | 禁用             | boolean                                | false  |
| overlayClass | 弹出层类名       | string                                 |        |
| overlayStyle | 弹出层样式       | object                                 |        |
| open         | 是否打开         | boolean                                |        |
| placement    | 弹出位置         | 'top' \| 'bottom' \| 'left' \| 'right' | 'top'  |
| title        | 标题             | string \| v-slot                       |        |
| content      | 内容             | string \| v-slot                       |        |

## Slots

| 名称    | 说明     |
| ------- | -------- |
| trigger | 触发元素 |
| title   | 标题     |
| content | 内容     |

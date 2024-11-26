## Props

| 名称           | 说明                   | 类型                              | 默认值   |
| -------------- | ---------------------- | --------------------------------- | -------- |
| allowClear     | 是否显示清除按钮       | boolean                           |          |
| borderer       | 是否显示边框           | boolean                           | true     |
| disabled       | 是否禁用               | boolean                           |          |
| status         | 设置校验状态           | 'error' \| 'warning' \| 'success' |          |
| size           | 设置输入框大小         | 'small' \| 'middle' \| 'large'    | 'middle' |
| type           | 声明 input 类型        | string                            | 'text'   |
| value(v-model) | 输入框内容             | string                            |          |
| autocomplete   | 原生 autocomplete 属性 | string                            |          |
| id             | 原生 id 属性           | string                            |          |
| name           | 原生 name 属性         | string                            |          |
| placeholder    | 输入框占位文本         | string                            |          |

## Events

| 名称   | 说明             | 回调参数    |
| ------ | ---------------- | ----------- |
| change | 输入框内容变化时 | function(e) |
| clear  | 点击清除按钮时   | function(e) |

## Slots

| 名称   | 说明       |
| ------ | ---------- |
| prefix | 输入框前缀 |
| suffix | 输入框后缀 |

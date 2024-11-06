## Props

| 名称     | 类型                                       | 默认值    | 说明               |
| -------- | ------------------------------------------ | --------- | ------------------ |
| type     | 'default' \| 'primary' \| 'link' \| 'text' | 'default' | 按钮类型           |
| htmlType | 'submit' \| 'button' \| 'reset'            | 'button'  | 原生类型           |
| shape    | 'default' \| 'circle' \| 'round'           | 'default' | 按钮形状           |
| size     | 'small' \| 'middle' \| 'large'             | 'middle'  | 按钮大小           |
| loading  | boolean                                    | false     | 加载状态           |
| disabled | boolean                                    | false     | 禁用状态           |
| block    | boolean                                    | false     | 块级按钮           |
| danger   | boolean                                    | false     | 危险按钮           |
| icon     | VNode                                      | -         | 图标               |
| title    | string                                     | -         | HTML标题属性       |
| href     | string                                     | -         | a 链接跳转地址     |
| target   | string                                     | -         | a 链接 target 属性 |

## Events

| 名称  | 说明       | 回调参数 |
| ----- | ---------- | -------- |
| click | 点击时触发 | function |

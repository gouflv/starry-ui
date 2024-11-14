## Props

| 名称     | 说明               | 类型                                       | 默认值    |
| -------- | ------------------ | ------------------------------------------ | --------- |
| type     | 按钮类型           | 'default' \| 'primary' \| 'link' \| 'text' | 'default' |
| htmlType | 原生类型           | 'submit' \| 'button' \| 'reset'            | 'button'  |
| shape    | 按钮形状           | 'default' \| 'circle' \| 'round'           | 'default' |
| size     | 按钮大小           | 'small' \| 'middle' \| 'large'             | 'middle'  |
| loading  | 加载状态           | boolean                                    | false     |
| disabled | 禁用状态           | boolean                                    | false     |
| block    | 块级按钮           | boolean                                    | false     |
| danger   | 危险按钮           | boolean                                    | false     |
| icon     | 图标               | vnode \| slot                              | -         |
| title    | HTML标题属性       | string                                     | -         |
| href     | a 链接跳转地址     | string                                     | -         |
| target   | a 链接 target 属性 | string                                     | -         |

## Events

| 名称  | 说明       | 回调参数 |
| ----- | ---------- | -------- |
| click | 点击时触发 | function |

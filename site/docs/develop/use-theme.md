# 在项目中引入主题

## 静态引入

可通过 [主题编辑器](../theme-editor.md) 的导出功能，获取全部 Design Token。

支持一下

### 原生 CSS

推荐使用 `CSS Variable`

### SCSS、LESS 等预编译工具

## 动态引入

通过调用独立的主题库 `@starry/theme`，可动态定制和输出主题配置。

```ts
import { getDesignToken } from '@starry/theme'

const token = getDesignToken({
  token: {
    colorPrimary: 'red'
  }
})

console.log(token.colorPrimary) // red
```

之后通过 `CSS-in-JS` 方式，在界面上使用。

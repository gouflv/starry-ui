# 使用主题

在 Starry UI 中，我们将主题抽象到一个独立的主题库 `@starry/theme` 中，以便于在组件之外使用。

主题库提供了一套完整的主题方案，包括 Token、梯度算法、模式算法和 CSS-in-JS 运行时方案等。

## 动态引入

通过调用独立的主题库 `@starry/theme`，可动态定制和输出主题配置。

```ts
import { getDesignToken } from '@starry/theme'

const token = getDesignToken({
  token: {
    colorPrimary: '#F00'
  }
})

console.log(token.colorPrimary) // #F00
console.log(token.colorPrimaryTextHover) // #FC2F28
```

也可以指定主题算法：

```ts
import { getDesignToken, themes } from '@starry/theme'

const token = getDesignToken({
  token: {
    colorPrimary: 'red'
  },
  derivative: [themes.default, themes.loosen] // 指定`关怀模式`
})
```

之后通过 `CSS-in-JS` 运行时方案，如 `emotion`、`panda` 等，将主题应用到 `Vue`、`React` 等应用中。

## 静态消费

当使用传统样式方案时，可通过 [主题编辑器](../theme-editor.md) 导出全部的 Design Token。

Token 支持的格式：`CSS Variable`、`SCSS`、`LESS`。

### 示例

```css
/* global.css */
:root {
  --color-primary: #3a8bff;
  --color-success: #52c41a;
  --color-warning: #faad14;
  --color-error: #ff4d4f;
  --color-info: #3a8bff;
  --color-text-base: #000;
  --color-bg-base: #fff;
  ...
}

/* pageA.css */
.page {
  color: var(--color-text-base);
  background-color: var(--color-bg-base);
}
```

## 参考

- [emotion](https://emotion.sh/)
- [panda](https://panda-css.com/)

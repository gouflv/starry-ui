# 使用主题

在 Starry UI 中，我们将主题抽象到一个独立的主题库 `@starry-ui/theme` 中，以便于在组件之外使用。

主题库提供了一套完整的主题方案，包括 Token、梯度算法、模式算法和 CSS-in-JS 运行时方案等。

## 动态引入

通过调用独立的主题库 `@starry-ui/theme`，可动态定制和输出主题配置。

```ts
import { getDesignToken } from '@starry-ui/theme'

const token = getDesignToken({
  token: {
    colorPrimary: '#F00'
  }
})

// 自动计算派生色值
console.log(token.colorPrimary) // 主色: #F00
console.log(token.colorPrimaryTextHover) // 悬停态文字主色 #FC2F28
```

也可以指定主题算法：

```ts
import { getDesignToken, themes } from '@starry-ui/theme'

const token = getDesignToken({
  token: {
    colorPrimary: '#F00'
  },
  derivative: [themes.default, themes.loosen] // 关怀模式 (增大间距、字号等)
})
```

之后通过 `CSS-in-JS` 运行时方案，如 `emotion`、`panda` 等，将 token 应用在 `Vue`、`React` 等应用中。

## 静态消费

当使用传统样式方案时，可通过 [主题编辑器](../theme-editor.md) 导出全部的 Design Token，用于静态消费。 示例：

```css
/* token.css */
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

支持的导出格式：`CSS Variable`、`SCSS`、`LESS`。

## 参考

- [emotion](https://emotion.sh/)
- [panda](https://panda-css.com/)

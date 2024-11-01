# Starry UI for Vue

Starry UI for Vue 是基于设计系统的 Vue 组件库，适合企业级中后台产品和桌面端网站。

## 特性

- 📦 基于 Vue 3.x 开发，充分利用 **组合式 API** 实现功能封装。
- 🎯 使用 TypeScript 开发，提供完整的类型定义。
- 🎨 基于 CSS-in-JS 的动态主题方案。
- 🔎 遵循 A11y 无障碍规范。

## 介绍

- Starry UI for Vue 是基于 Vue 3.x 版本开发的组件库， 高度依赖了 **组合式 API** 的特性，提供了一套完整的组件库解决方案。

- 基于 **CSS-in-JS** 的动态主题方案，弃用了传统静态样式的开发方式，产物中不再包含 css 文件。

## 安装

```bash
npm install @starry-ui/vue
```

### 示例

```tsx
import { Button } from '@starry-ui/vue'

export default {
  setup() {
    return () => <Button>Click me</Button>
  }
}
```

## 兼容性

### Vue 2.x 版本

组件库使用 `vue-demi` 库，对 Vue 2.x 版本提供了一定的兼容性，但是由于 Vue 3.x 版本的组合式 API 与 Vue 2.x 版本存在较大差异，因此需要 🚨[额外注意](https://v2.cn.vuejs.org/v2/guide/migration-vue-2-7.html)

::: warning
对于 Vue 2 时代的 `Option Base API` 和 `Class Base API` **暂不做完全兼容**。
:::

### 浏览器

支持现代浏览器。

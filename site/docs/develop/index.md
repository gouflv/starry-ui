# Starry UI

Starry UI 是基于设计系统的 Vue 组件库和工具集合，适合企业级中后台产品和桌面端网站。

## 特性

- 📦 基于 Vue 3.x 开发，充分利用 **组合式 API** 实现功能封装。
- 🎨 基于 CSS-in-JS 的动态主题系统，支持运行时切换。
- 🧩 基于成熟的 **Headless UI** 组件构建。
- 🎯 使用 TypeScript 开发，提供完整的类型定义。
- 🔎 遵循 A11y 无障碍规范。

## 介绍

- **Starry UI** 是基于 Vue 3.x 版本开发的组件库， 高度依赖了 **组合式 API** 的特性，提供了一套完整的组件库解决方案。
- 基于 **CSS-in-JS** 的主题方案。突破传统静态样式的局限，通过 JavaScript 实现运行时动态生成样式，赋予主题系统算法能力和动态特性，实现更灵活的主题定制与模式切换。
- 组件以社区中成熟的 **Headless UI** 组件为基座，仅套用主题和做有限的功能定制，最大程度保障可靠性和无障碍访问的支持。

## 兼容性

### Vue 2.x 版本

组件库使用 `vue-demi` 库，对 Vue 2.x 版本提供了一定的兼容性，但是由于 Vue 3.x 版本的组合式 API 与 Vue 2.x 版本存在较大差异，因此开发时需要 [额外关注](https://v2.cn.vuejs.org/v2/guide/migration-vue-2-7.html)。

::: warning 注意
对于 Vue 2 时代的 `Option Base API` 和 `Class Base API` **暂不做完全兼容**。
:::

### 浏览器

支持现代浏览器。

## 依赖的生态和工具

- [Vue](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- CSS-in-JS
  - @starry-ui/theme
  - [Emotion](https://emotion.sh/)
- Headless UI
  - [Radix Vue](https://www.radix-vue.com/)
  - [@tanstack/vue-table](https://tanstack.com/table/)
- 文档工具
  - [Storybook](https://storybook.js.org/)
  - [Vitepress](https://vitepress.vuejs.org/)

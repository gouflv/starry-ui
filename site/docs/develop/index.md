# Starry UI

Starry UI 是基于设计系统的 Vue 组件库和工具集合，适合企业级中后台产品和桌面端网站。

## 特性

- 📦 基于 Vue 3.x 开发，充分利用 **组合式 API** 实现功能封装。
- 🎨 基于 CSS-in-JS 的动态主题系统，支持运行时切换。
- 🧩 基于 **Headless UI** 组件基座。
- 🎯 使用 TypeScript 开发，提供完整的类型定义。
- 🔎 遵循 A11y 无障碍规范。

## 介绍

- **Starry UI** 是基于 Vue 3.x 版本开发的组件库， 高度依赖了 **组合式 API** 的特性，提供了一套完整的组件库解决方案。
- 基于 **CSS-in-JS** 的主题方案。突破传统静态样式的局限。
  - 通过 JavaScript 实现运行时**动态样式**，赋予主题系统算法能力和动态特性，实现更灵活的主题定制与模式切换。
  - 不再导出静态 CSS 文件，避免全局样式冲突。
  - 可完全独立使用，在现有项目中实现**渐进式**升级。
- 组件以社区中成熟的 **Headless UI** 组件为基座，仅需套用主题和做有限的功能定制，最大程度保障功能的可靠性和无障碍访问。

## 兼容性

### Vue 2.x 版本

由于社区主流的组件基座，都已放弃支持 Vue 2.x，因此 Starry UI 暂无法向下兼容。如有必要，需独立开发组件基座。

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
- 文档
  - [Storybook](https://storybook.js.org/)
  - [Vitepress](https://vitepress.vuejs.org/)

## 参考

[CSS-in-JS](https://ant-design.github.io/antd-style/zh-CN/guide/css-in-js-intro)

# 主题

**主题** 是用于统一界面风格和视觉效果的配置集合。 其中 Design Token 是设计系统中用来存储视觉样式的最小单位，包括颜色、字体大小、边距、动画等。

在 Starry UI 中，我们将主题抽象到一个独立的主题库 `@starry/theme` 中，以便于在不同的平台和框架中使用。 主题库提供了一套完整的主题方案，包括 Token、梯度算法、模式算法和 CSS-in-JS 运行时方案等，使得开发人员可以快速使用和定制主题。

## Design Token

我们将 Design Token 抽象成三层结构，分别是 Seed Token、Map Token 和 Alias Token。

::: tip
在大部分情况下，使用 Seed Token 就可以满足定制主题的需要。
:::

### 基础变量（Seed Token）

| Token 名称      | 描述                                           | 类型    | 默认值                                                                                                                                                                                |
| --------------- | ---------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| borderRadius    | 基础组件的圆角大小，如按钮、输入框等           | number  | 6                                                                                                                                                                                     |
| colorBgBase     | 用于背景色梯度的基础变量，生成背景色梯度变量   | string  | #fff                                                                                                                                                                                  |
| colorError      | 表示操作失败的颜色，如错误状态提示             | string  | #ff4d4f                                                                                                                                                                               |
| colorInfo       | 表示操作信息的颜色，如 Alert、Tag 等           | string  | #1677ff                                                                                                                                                                               |
| colorLink       | 控制超链接的颜色                               | string  | #1677ff                                                                                                                                                                               |
| colorPrimary    | 品牌色                                         | string  | #1677ff                                                                                                                                                                               |
| colorSuccess    | 表示操作成功的颜色，如 Result、Progress 等组件 | string  | #52c41a                                                                                                                                                                               |
| colorTextBase   | 用于文本色梯度的基础变量，生成文本色梯度变量   | string  | #000                                                                                                                                                                                  |
| colorWarning    | 表示操作警告的颜色，如 Notification 等         | string  | #faad14                                                                                                                                                                               |
| controlHeight   | 基础控件的高度，如按钮和输入框                 | number  | 32                                                                                                                                                                                    |
| fontFamily      | 使用系统默认界面字体，提供屏显友好的备用字体   | string  | -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' |
| fontFamilyCode  | 代码字体，用于 code、pre、kbd 元素             | string  | 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace                                                                                                              |
| fontSize        | 常用的字体大小                                 | number  | 14                                                                                                                                                                                    |
| lineType        | 控制边框和分割线样式                           | string  | solid                                                                                                                                                                                 |
| lineWidth       | 控制边框和分割线宽度                           | number  | 1                                                                                                                                                                                     |
| motion          | 配置动画效果，`false` 时关闭动画               | boolean | true                                                                                                                                                                                  |
| sizePopupArrow  | 组件箭头的尺寸                                 | number  | 16                                                                                                                                                                                    |
| sizeStep        | 控制组件尺寸的基础步长                         | number  | 4                                                                                                                                                                                     |
| sizeUnit        | 控制尺寸变化单位                               | number  | 4                                                                                                                                                                                     |
| zIndexBase      | 组件基础 Z 轴值                                | number  | 0                                                                                                                                                                                     |
| zIndexPopupBase | 浮层类组件的基础 Z 轴值                        | number  | 1000                                                                                                                                                                                  |

### 梯度变量（Map Token）

> 继承所有 SeedToken 的属性

Map Token 是基于 Seed 派生的梯度变量。定制 Map Token 推荐通过 theme.algorithm 来实现。

### 别名变量（Alias Token）

> 继承所有 MapToken 的属性

Alias Token 是 Map Token 的语意化别名，用于组件内使用。

### 模式算法（algorithm)

用于将 Seed Token 展开为 Map Token。提供了 3 种算法：

- `default`: 默认算法
- `compact`: 紧凑算法
- `loose`: 宽松算法（适用于“长辈模式”等场景）

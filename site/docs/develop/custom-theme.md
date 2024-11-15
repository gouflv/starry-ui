# 主题定制

Starry UI 使用 `@starry-ui/theme` 作为主题系统，支持运行时动态切换主题。

## 配置主题变量

使用 `DesignTokenProvider` 组件包裹应用根节点，通过 `token` 属性配置主题变量：

```vue
<!-- App.vue -->
<template>
  <DesignTokenProvider :token="{ colorPrimary: 'red' }">
    <RouterView />
  </DesignTokenProvider>
</template>

<script setup>
import { DesignTokenProvider } from '@starry-ui/core'
</script>
```

## 动态切换

支持响应式的 Token 和预设算法参数，示例：

```vue
<!-- App.vue -->
<template>
  <DesignTokenProvider :token="token" :algorithm="algorithm">
    <RouterView />
  </DesignTokenProvider>
</template>

<script setup>
import { Algorithm, AliasToken, DesignTokenProvider, themes } from '@starry-ui/core'

const token = ref<Partial<AliasToken>>({ colorPrimary: 'red' })

const algorithm = ref<Algorithm[]>()

function setPrimaryColor(color: string) {
  token.value = { ...token.value, colorPrimary: color }
}

// 紧凑模式
function setCompact() {
  algorithm.value = [themes.default, themes.compact]
}

// 关怀模式
function setLoose() {
  algorithm.value = [themes.default, themes.loosen]
}
</script>
```

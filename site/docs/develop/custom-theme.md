# 主题定制

Starry UI 依赖主题库 `@starry-ui/theme`

## 修改主题变量

`@starry-ui/core` 提供了 `DesignTokenProvider` 组件，用于配置组件的主题。

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

Token 变量和算法详情可以前往 [@starry-ui/theme](./theme-pkg/api.md) 进行查看。

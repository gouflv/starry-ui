<template>
  <ConfigProvider
    :locale="zhCN"
    :theme="{
      token: {
        colorPrimary: '#3a8bff',
        blue: '#3a8bff'
      }
    }"
  >
    <slot />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
</script>

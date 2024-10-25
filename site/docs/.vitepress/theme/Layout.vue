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
    <Layout></Layout>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<style>
:root {
  --vp-c-brand-1: #3a8bff;
}
</style>

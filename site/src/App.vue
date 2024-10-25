<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <ConfigProvider :locale="zhCN">
    <AppHeader />
    <RouterView />
  </ConfigProvider>
</template>

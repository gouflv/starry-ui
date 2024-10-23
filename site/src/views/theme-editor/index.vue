<template>
  <div class="pb-20">
    <AppHeader />
    <div class="border-b border-gray-1 bg-white px-5 py-4">
      <div class="font-semibold">主题编辑器</div>
    </div>
    <div>
      <Tabs class="px-5">
        <TabPane key="seed" tab="颜色">
          <ColorTokens />
        </TabPane>
        <TabPane key="alias" tab="尺寸"> </TabPane>
        <TabPane key="alias" tab="风格"> </TabPane>
        <TabPane key="presetColor" tab="基础色板">
          <PresetColors />
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TabPane, Tabs } from 'ant-design-vue'
import AppHeader from '../AppHeader.vue'
import { default as ColorTokens } from './sections/ColorTokens.vue'
import PresetColors from './sections/PresetColors.vue'
</script>

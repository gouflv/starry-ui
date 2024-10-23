<template>
  <div class="pb-20">
    <div class="border-b border-gray-1 bg-white px-5 py-4">
      <div class="font-semibold">主题编辑器</div>
    </div>
    <div>
      <Tabs class="px-5">
        <TabPane key="seed" tab="颜色">
          <ColorTokens />
        </TabPane>
        <TabPane key="size" tab="尺寸">
          <SizeTokens />
        </TabPane>
        <TabPane key="style" tab="风格">
          <StyleTokens />
        </TabPane>
        <TabPane key="presetColor" tab="基础色板">
          <PresetColors />
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TabPane, Tabs } from 'ant-design-vue'
import { default as ColorTokens } from './sections/ColorTokens.vue'
import PresetColors from './sections/PresetColors.vue'
import SizeTokens from './sections/SizeTokens.vue'
import StyleTokens from './sections/StyleTokens.vue'
</script>

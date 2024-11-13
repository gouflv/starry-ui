<template>
  <AntConfig>
    <div class="pb-20">
      <div
        class="flex justify-between border-b border-gray-1 bg-white bg-white px-5"
      >
        <div class="py-4">
          <div class="font-semibold">主题编辑器</div>
        </div>
        <div class="flex items-center">
          <Exports />
        </div>
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
        </Tabs>
      </div>
    </div>
  </AntConfig>
</template>

<script lang="ts" setup>
import { TabPane, Tabs } from 'ant-design-vue'
import Exports from './exports/index.vue'
import { default as ColorTokens } from './sections/ColorTokens.vue'
import SizeTokens from './sections/SizeTokens.vue'
import StyleTokens from './sections/StyleTokens.vue'
</script>

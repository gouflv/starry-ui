<template>
  <AntConfig>
    <DesignTokenProvider :token="dirty">
      <div class="h-[calc(100vh-64px)] flex">
        <!-- editor -->
        <div class="w-full overflow-y-auto pb-20 lg:w-1/3">
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
        <!-- Preview -->
        <div class="hidden flex-1 overflow-y-auto bg-gray-1 p-10 lg:block">
          <Preview />
        </div>
      </div>
    </DesignTokenProvider>
  </AntConfig>
</template>

<script lang="ts" setup>
import { DesignTokenProvider } from '@starry-ui/core'
import { TabPane, Tabs } from 'ant-design-vue'
import { storeToRefs } from 'pinia'
import Preview from '../preview/index.vue'
import Exports from './exports/index.vue'
import { default as ColorTokens } from './sections/ColorTokens.vue'
import SizeTokens from './sections/SizeTokens.vue'
import StyleTokens from './sections/StyleTokens.vue'
import { useEditorStore } from './store/useEditorStore'

const themeStore = useEditorStore()
const { dirty } = storeToRefs(themeStore)
</script>

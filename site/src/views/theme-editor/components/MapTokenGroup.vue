<template>
  <div class="mb-4 bg-gray-50 p-3 rounded-md">
    <div class="mb-1">
      {{ data.title }}
    </div>

    <div v-if="data.name" class="flex items-center justify-between mb-2">
      <div class="font-semibold">
        {{ data.name }}
      </div>
      <div>
        <ColorPicker :value="token[data.name] as string" />
      </div>
    </div>

    <div vif="data.map" class="border border-gray-2 rounded-md">
      <Collapse v-model:active-key="active" :bordered="false" ghost>
        <template #expandIcon="{ isActive }">
          <CaretRightOutlined :rotate="isActive ? 90 : 0" />
        </template>
        <CollapsePanel key="1" header="梯度变量">
          <MapTokenSubItem
            v-for="(sub, i) in data.map"
            :key="i"
            :token="token"
            :data="sub"
          />
        </CollapsePanel>
      </Collapse>
    </div>
  </div>
</template>

<script setup lang="ts">
import ColorPicker from '@/components/ColorPicker.vue'
import { CaretRightOutlined } from '@ant-design/icons-vue'
import type { GlobalToken } from '@starry/theme'
import { Collapse, CollapsePanel } from 'ant-design-vue'
import { ref } from 'vue'
import MapTokenSubItem from './MapTokenSubItem.vue'

export type MapGroupItem = {
  title: string
  name?: keyof GlobalToken
  desc?: string
  dataType?: 'color' | 'number' | 'string'
  map?: { title?: string; name: keyof GlobalToken; desc?: string }[]
}

const props = defineProps<{
  token: GlobalToken
  data: MapGroupItem
}>()

const active = ref<string[]>([])
</script>

<style>
.ant-collapse-header {
  padding-top: 6px !important;
  padding-bottom: 6px !important;
}
.ant-collapse-expand-icon {
  padding-inline-end: 8px !important;
}
</style>

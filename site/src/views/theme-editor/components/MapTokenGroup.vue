<template>
  <div class="rounded-md p-3">
    <div class="mb-1">
      {{ data.title }}
    </div>

    <div v-if="data.name" class="mb-2 flex items-center justify-between">
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
.ant-collapse-content-box {
  margin-top: -6px;
}
</style>

<template>
  <div class="mb-3 py-2">
    <div class="mb-1">
      {{ data.title }}
    </div>

    <div v-if="data.name" class="mb-2 flex items-center justify-between">
      <div class="text-blue-5 font-semibold">
        {{ data.name }}
      </div>
      <div>
        <ColorPicker
          v-if="dataType === 'color'"
          :value="token[data.name] as string"
          @update:value="onUpdate"
        />
        <InputNumber
          v-if="['size', 'font'].includes(dataType)"
          :value="token[data.name] as number"
          :min="0"
          @update:value="onUpdate"
        />
      </div>
    </div>

    <div v-if="data.map" class="border border-gray-2 rounded-md">
      <Collapse v-model:active-key="active" :bordered="false">
        <template #expandIcon="{ isActive }">
          <CaretRightOutlined :rotate="isActive ? 90 : 0" />
        </template>
        <CollapsePanel key="1" header="梯度变量">
          <MapTokenSubItem
            v-for="(sub, i) in data.map"
            :key="i"
            :token="token"
            :data="sub"
            :data-type="data.dataType"
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
import { Collapse, CollapsePanel, InputNumber } from 'ant-design-vue'
import { ref } from 'vue'
import { useEditorStore } from '../store/useEditorStore'
import MapTokenSubItem from './MapTokenSubItem.vue'

type TokenMeta = {
  title?: string
  name?: keyof GlobalToken
  desc?: string
  dataType?: 'color' | 'size' | 'font' | 'string'
}

export type MapGroupItem = TokenMeta & {
  title: string
  map?: Array<TokenMeta & { name: keyof GlobalToken }>
}

const props = defineProps<{
  token: GlobalToken
  data: MapGroupItem
}>()

const active = ref<string[]>([])

const dataType = props.data.dataType || 'color'

const { set } = useEditorStore()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onUpdate(value: any) {
  set(props.data.name!, value)
}
</script>

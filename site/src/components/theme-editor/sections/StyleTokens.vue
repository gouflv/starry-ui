<template>
  <div>
    <MapTokenGroup
      v-for="(it, i) in items"
      :key="i"
      :data="it"
      :token="token"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import MapTokenGroup, {
  type MapGroupItem
} from '../components/MapTokenGroup.vue'
import { useEditorStore } from '../store/useEditorStore'

const { token } = storeToRefs(useEditorStore())

const items: MapGroupItem[] = [
  {
    title: '圆角',
    name: 'borderRadius',
    map: [
      { name: 'borderRadius', title: '默认' },
      { name: 'borderRadiusXS' },
      { name: 'borderRadiusSM' },
      { name: 'borderRadiusLG' }
    ],
    dataType: 'size'
  },
  {
    title: '阴影',
    map: [
      { name: 'boxShadow' },
      { name: 'boxShadowSecondary' },
      { name: 'boxShadowTertiary' }
    ],
    dataType: 'string'
  }
]
</script>

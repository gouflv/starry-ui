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
import { useToken } from '@starry/theme'
import MapTokenGroup, {
  type MapGroupItem
} from '../components/MapTokenGroup.vue'

const [, token] = useToken()

const items: MapGroupItem[] = [
  {
    title: '字体大小',
    name: 'fontSize',
    map: [
      { name: 'fontSize', title: '默认' },
      { name: 'fontSizeSM' },
      { name: 'fontSizeLG' },
      { name: 'fontSizeXL' },
      { name: 'fontSizeHeading1' },
      { name: 'fontSizeHeading2' },
      { name: 'fontSizeHeading3' },
      { name: 'fontSizeHeading4' },
      { name: 'fontSizeHeading5' },
      { name: 'lineHeight' },
      { name: 'lineHeightSM' },
      { name: 'lineHeightLG' },
      { name: 'lineHeightHeading1' },
      { name: 'lineHeightHeading2' },
      { name: 'lineHeightHeading3' },
      { name: 'lineHeightHeading4' },
      { name: 'lineHeightHeading5' }
    ],
    dataType: 'font'
  },
  {
    title: '尺寸步长',
    name: 'sizeStep',
    dataType: 'size'
  },
  {
    title: '尺寸变化单位',
    name: 'sizeUnit',
    dataType: 'size',
    map: [
      { name: 'marginXXS' },
      { name: 'marginXS' },
      { name: 'marginSM' },
      { name: 'margin', title: '默认外边距' },
      { name: 'marginMD' },
      { name: 'marginLG' },
      { name: 'marginXL' },
      { name: 'marginXXL' },
      { name: 'paddingXXS' },
      { name: 'paddingXS' },
      { name: 'paddingSM' },
      { name: 'padding', title: '默认内边距' },
      { name: 'paddingMD' },
      { name: 'paddingLG' },
      { name: 'paddingXL' }
    ]
  },
  {
    title: '屏幕查询',
    map: [
      { name: 'screenXS' },
      { name: 'screenSM' },
      { name: 'screenMD' },
      { name: 'screenLG' },
      { name: 'screenXL' },
      { name: 'screenXXL' },
      { name: 'screenXXXL' }
    ],
    dataType: 'string'
  }
]
</script>

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
    name: 'colorPrimary',
    title: '品牌色',
    map: [
      { name: 'colorPrimary' },
      { name: 'colorPrimaryBg' },
      { name: 'colorPrimaryBgHover' },
      { name: 'colorPrimaryBorder' },
      { name: 'colorPrimaryBorderHover' },
      { name: 'colorPrimaryHover' },
      { name: 'colorPrimaryActive' },
      { name: 'colorPrimaryText' },
      { name: 'colorPrimaryTextHover' },
      { name: 'colorPrimaryTextActive' }
    ]
  },
  {
    name: 'colorSuccess',
    title: '成功色',
    map: [
      { name: 'colorSuccess' },
      { name: 'colorSuccessBg' },
      { name: 'colorSuccessBgHover' },
      { name: 'colorSuccessBorder' },
      { name: 'colorSuccessBorderHover' },
      { name: 'colorSuccessHover' },
      { name: 'colorSuccessActive' },
      { name: 'colorSuccessText' },
      { name: 'colorSuccessTextHover' },
      { name: 'colorSuccessTextActive' }
    ]
  },
  {
    name: 'colorWarning',
    title: '警戒色',
    map: [
      { name: 'colorWarning' },
      { name: 'colorWarningBg' },
      { name: 'colorWarningBgHover' },
      { name: 'colorWarningBorder' },
      { name: 'colorWarningBorderHover' },
      { name: 'colorWarningHover' },
      { name: 'colorWarningActive' },
      { name: 'colorWarningText' },
      { name: 'colorWarningTextHover' },
      { name: 'colorWarningTextActive' }
    ]
  },
  {
    name: 'colorError',
    title: '错误色',
    map: [
      { name: 'colorError' },
      { name: 'colorErrorBg' },
      { name: 'colorErrorBgHover' },
      { name: 'colorErrorBorder' },
      { name: 'colorErrorBorderHover' },
      { name: 'colorErrorHover' },
      { name: 'colorErrorActive' },
      { name: 'colorErrorText' },
      { name: 'colorErrorTextHover' },
      { name: 'colorErrorTextActive' }
    ]
  },
  {
    name: 'colorInfo',
    title: '信息色',
    map: [
      { name: 'colorInfo' },
      { name: 'colorInfoBg' },
      { name: 'colorInfoBgHover' },
      { name: 'colorInfoBorder' },
      { name: 'colorInfoBorderHover' },
      { name: 'colorInfoHover' },
      { name: 'colorInfoActive' },
      { name: 'colorInfoText' },
      { name: 'colorInfoTextHover' },
      { name: 'colorInfoTextActive' }
    ]
  },
  {
    name: 'colorLink',
    title: '链接色',
    map: [{ name: 'colorLinkHover' }, { name: 'colorLinkActive' }]
  },
  {
    name: 'colorTextBase',
    title: '文本基础色',
    map: [
      { name: 'colorText', title: '一级文本' },
      { name: 'colorTextSecondary', title: '二级文本' },
      { name: 'colorTextTertiary', title: '三级文本' },
      { name: 'colorTextQuaternary', title: '四级文本' },
      { name: 'colorTextPlaceholder', title: '占位文本' },
      { name: 'colorTextDisabled', title: '禁用文本' },
      { name: 'colorTextHeading', title: '标题文本' },
      { name: 'colorTextLabel', title: '标签文本' },
      { name: 'colorTextDescription', title: '描述文本' },
      { name: 'colorTextLightSolid', title: '深色背景高亮文本' }
    ]
  },
  {
    name: 'colorBgBase',
    title: '背景基础色',
    map: [
      { name: 'colorBorder', title: '一级边框' },
      { name: 'colorBorderSecondary', title: '二级边框' },
      { name: 'colorFill', title: '一级填充' },
      { name: 'colorFillSecondary', title: '二级填充' },
      { name: 'colorFillTertiary', title: '三级填充' },
      { name: 'colorFillQuaternary', title: '四级填充' },
      { name: 'colorBgContainer', title: '容器背景' },
      { name: 'colorBgElevated', title: '覆层容器背景' },
      { name: 'colorBgLayout', title: '布局背景' },
      { name: 'colorBgSpotlight', title: '聚焦背景' },
      { name: 'colorBgMask', title: '遮罩背景' }
    ]
  }
]
</script>

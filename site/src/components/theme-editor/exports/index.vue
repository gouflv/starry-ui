<template>
  <Button type="primary" size="small" @click="open = true">导出配置</Button>

  <Modal v-model:open="open" title="导出配置" :width="600">
    <Tabs v-model:active-key="activeKey">
      <TabPane v-for="type in types" :key="type.key" :tab="type.label">
      </TabPane>
    </Tabs>

    <CodeArea :lang="activeKey" :value="code" />

    <div class="mt-2" v-if="activeKey !== 'json'">
      <FormItem label="前缀" class="mb-0">
        <Checkbox v-model:checked="prefix" />
      </FormItem>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { transformTokenToCSSVariable } from '@starry/theme'
import {
  Button,
  Checkbox,
  FormItem,
  Modal,
  TabPane,
  Tabs
} from 'ant-design-vue'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { useEditorStore } from '../store/useEditorStore'
import CodeArea from './CodeArea.vue'

type Lang = 'scss' | 'less' | 'css' | 'json'

const { token, dirty } = storeToRefs(useEditorStore())

const open = ref(false)

const types = [
  { key: 'scss', label: 'SCSS' },
  { key: 'less', label: 'LESS' },
  { key: 'css', label: 'CSS' },
  { key: 'json', label: '组件配置' }
]
const activeKey = ref<Lang>('scss')

const prefix = ref(false)

const code = computed(() => {
  switch (activeKey.value) {
    case 'less':
    case 'scss':
      return transformTokenToCSSVariable(token.value, {
        prefix: prefix.value ? 'st' : '',
        lang: activeKey.value
      })
    case 'css':
      return transformTokenToCSSVariable(token.value, {
        prefix: prefix.value ? 'st' : '',
        lang: activeKey.value,
        scope: ':root'
      })
    default:
      return JSON.stringify(dirty.value, null, 2)
  }
})
</script>

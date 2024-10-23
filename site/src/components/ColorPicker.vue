<template>
  <Popover v-model:open="open" trigger="click" destroy-tooltip-on-hide>
    <div
      class="relative flex cursor-pointer items-center gap-2 border border-gray-2 rounded-md p-1"
      @click="open = true"
    >
      <div
        class="h-8 w-12 border border-gray-1 rounded"
        :style="{
          backgroundColor: value
        }"
      ></div>
      <code class="text-xs text-gray-5">{{ value }}</code>
    </div>

    <template #content>
      <color-picker
        :pureColor="value"
        picker-type="chrome"
        is-widget
        disable-history
        style="min-width: 270px"
        @update:pure-color="onChange"
      />
    </template>
  </Popover>
</template>

<script setup lang="ts">
import { fixRGBA2Hex } from '@/utils/color'
import { Popover } from 'ant-design-vue'
import { ref } from 'vue'
import { ColorPicker } from 'vue3-colorpicker'
import 'vue3-colorpicker/style.css'

defineProps<{
  value: string
}>()
const emit = defineEmits<{
  'update:value': [string]
}>()

const open = ref(false)

function onChange(value: string) {
  emit('update:value', fixRGBA2Hex(value))
}
</script>

<style>
.vc-colorpicker {
  box-shadow: none !important;
  margin: -12px;
}
</style>

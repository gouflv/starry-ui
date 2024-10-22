<template>
  <div
    class="text-xs flex items-center justify-between border border-gray-3 -mt-[1px] first:rounded-t last:rounded-b overflow-hidden"
  >
    <div class="pl-3 py-2">
      <span class="font-semibold">
        {{ data.title || data.name }}
      </span>
      <span v-if="data.title" class="text-gray-5 ml-2">
        {{ data.name }}
      </span>
    </div>
    <div class="flex items-center space-x-3">
      <code class="p-1 bg-gray-2 rounded text-gray-700">{{
        token[data.name]
      }}</code>
      <div
        class="w-10 h-10"
        :style="{ backgroundColor: token[data.name] as string }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GlobalToken } from '@starry/theme'
import type { MapGroupItem } from './MapTokenGroup.vue'

const props = defineProps<{
  token: GlobalToken
  data: Required<MapGroupItem>['map'][number]
}>()
</script>

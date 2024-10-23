<template>
  <div
    class="flex items-center justify-between overflow-hidden border border-gray-2 bg-white text-xs -mt-[1px] first:rounded-t last:rounded-b"
  >
    <div class="py-2 pl-3">
      <span class="font-semibold">
        {{ data.title || data.name }}
      </span>
      <span v-if="data.title" class="ml-2 text-gray-5">
        {{ data.name }}
      </span>
    </div>

    <template v-if="dataType === 'color'">
      <div class="flex items-center space-x-3">
        <code class="rounded bg-gray-1 p-1 text-gray-5">{{
          token[data.name]
        }}</code>
        <div
          class="h-10 w-12"
          :style="{ backgroundColor: token[data.name] as string }"
        ></div>
      </div>
    </template>

    <template v-else>
      <div class="pr-3">
        <code class="max-w-[10em] rounded bg-gray-1 p-1 text-gray-5">{{
          token[data.name]
        }}</code>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { GlobalToken } from '@starry/theme'
import type { MapGroupItem } from './MapTokenGroup.vue'

const props = defineProps<{
  token: GlobalToken
  data: Required<MapGroupItem>['map'][number]
  dataType: MapGroupItem['dataType']
}>()

const dataType = props.data.dataType || props.dataType || 'color'
</script>

<template>
  <div
    class="flex items-center justify-between overflow-hidden border border-gray-2 bg-white px-3 py-2 text-xs -mt-[1px] first:rounded-t last:rounded-b"
    :class="{
      'pr-0': dataType === 'color'
    }"
  >
    <div>
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
          class="h-10 w-12 -my-2"
          :style="{ backgroundColor: token[data.name] as string }"
        ></div>
      </div>
    </template>

    <template v-else>
      <div class="max-w-[30em] rounded bg-gray-1 p-1">
        <code class="text-gray-5">{{ token[data.name] }}</code>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { GlobalToken } from '@starry-ui/theme'
import type { MapGroupItem } from './MapTokenGroup.vue'

const props = defineProps<{
  token: GlobalToken
  data: Required<MapGroupItem>['map'][number]
  dataType: MapGroupItem['dataType']
}>()

const dataType = props.data.dataType || props.dataType || 'color'
</script>

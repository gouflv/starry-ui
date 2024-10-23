<template>
  <div
    class="flex items-center justify-between overflow-hidden border border-gray-2 text-xs -mt-[1px] first:rounded-t last:rounded-b"
  >
    <div class="py-2 pl-3">
      <span class="font-semibold">
        {{ data.title || data.name }}
      </span>
      <span v-if="data.title" class="ml-2 text-gray-5">
        {{ data.name }}
      </span>
    </div>
    <div class="flex items-center space-x-3">
      <code class="rounded bg-gray-1 p-1 text-gray-5">{{
        token[data.name]
      }}</code>
      <div
        class="h-10 w-12"
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

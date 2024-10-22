<template>
  <div
    :class="['flex items-center justify-between p-3']"
    :style="{
      backgroundColor: value
    }"
  >
    <div
      :class="[
        {
          'text-white/80': isDarkColor(value),
          'text-black/80': !isDarkColor(value)
        }
      ]"
    >
      {{ name }}
    </div>
    <code
      :class="[
        'text-sm text-slate-6',
        {
          'text-white/80': isDarkColor(value),
          'text-black/80': !isDarkColor(value)
        }
      ]"
      >{{ value }}</code
    >
  </div>
</template>

<script setup lang="ts">
import { isDarkColor } from '@/utils/color'
import type { GlobalToken } from '@starry/theme'
import { computed } from 'vue'

const props = defineProps<{
  token: GlobalToken
  name: keyof GlobalToken
}>()

const value = computed(() => props.token[props.name] as string)
</script>

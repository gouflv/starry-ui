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
          'text-white/80!': isDarkColor(value),
          'text-black/80!': !isDarkColor(value)
        }
      ]"
    >
      {{ name }}
    </div>
    <code
      :class="[
        'text-xs! p-0! bg-transparent!',
        {
          'text-white/80!': isDarkColor(value),
          'text-black/80!': !isDarkColor(value)
        }
      ]"
      >{{ value }}</code
    >
  </div>
</template>

<script setup lang="ts">
import type { GlobalToken } from '@starry/theme'
import { computed } from 'vue'
import { isDarkColor } from '../../utils/color'

const props = defineProps<{
  token: GlobalToken
  name: string
}>()

const value = computed(
  () => props.token[props.name as keyof GlobalToken] as string
)
</script>

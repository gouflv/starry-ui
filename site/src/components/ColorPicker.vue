<template>
  <div
    class="flex p-1 items-center gap-2 border border-gray-2 rounded-md cursor-pointer"
  >
    <div
      class="w-10 h-7 rounded-md"
      :style="{
        backgroundColor: value
      }"
    ></div>
    <code class="">{{ value }}</code>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: string
}>()
</script>

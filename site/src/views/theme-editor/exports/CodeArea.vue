<template>
  <div
    class="min-h-[100px] overflow-hidden border border-gray-2 rounded text-sm"
  >
    <div class="max-h-md overflow-y-auto">
      <div v-html="html" class="p-4"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { codeToHtml } from 'shiki'
import { ref, watch } from 'vue'

const props = defineProps<{
  value: string
  lang: string
}>()

const html = ref()

async function render() {
  html.value = await codeToHtml(props.value, {
    lang: props.lang,
    theme: 'vitesse-light'
  })
}

watch(() => props.value, render, { immediate: true })
</script>

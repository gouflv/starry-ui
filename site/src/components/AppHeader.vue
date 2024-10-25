<template>
  <div
    class="relative sticky top-0 z-1 z-10 flex justify-between border-b border-gray-2 bg-white px-8 shadow-sm"
  >
    <div class="flex items-center py-3">
      <!-- <i class="mr-2 h-10 w-10 bg-gray-1"></i> -->
      <h1 class="m-0 text-lg font-semibold">Starry UI</h1>
    </div>
    <div class="flex">
      <nav class="flex gap-x-[1em]">
        <RouterLink
          v-for="it in navItems"
          :key="it.link"
          class="flex items-center px-[1em] text-sm"
          :to="it.link"
        >
          {{ it.name }}
        </RouterLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const navItems = ref([
  { name: '设计', link: 'design' },
  { name: '研发', link: 'dev' },
  { name: '组件', link: 'components' },
  { name: '主题编辑', link: 'editor' }
])
</script>

<style>
a {
  @apply text-gray-5 hover:text-blue-5;
}
.router-link-active {
  @apply text-blue-5;
}
</style>

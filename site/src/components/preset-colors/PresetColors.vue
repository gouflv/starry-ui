<template>
  <div class="grid grid-cols-3 gap-6">
    <div
      v-for="name in PresetColors"
      :key="name"
      class="overflow-hidden rounded"
    >
      <template v-for="i in 10" :key="i">
        <Color :token="token" :name="`${name}-${i}`" />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PresetColors, useToken } from '@starry-ui/theme'
import Color from './Color.vue'

const { token } = useToken()
</script>

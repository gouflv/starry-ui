<template>
  <div class="grid grid-cols-4 gap-6">
    <div v-for="name in PresetColors" :key="name">
      <template v-for="i in 10" :key="i">
        <Color :token="token" :name="`${name}-${i}`" />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PresetColors, useToken } from '@starry/theme'
import Color from '../components/Color.vue'

const { token } = useToken()
</script>

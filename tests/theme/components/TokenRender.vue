<template>
  <div>
    <span v-for="(v, t) in token" :key="t">{{ t }}:{{ v }}</span>
  </div>
</template>

<script setup lang="ts">
import { useToken } from '@starry/theme'
const [, token] = useToken()
</script>

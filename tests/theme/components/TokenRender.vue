<template>
  {{ value }}
</template>

<script setup lang="ts">
import { useToken } from '@starry/theme'
import { reduce } from 'lodash-es'
import { computed } from 'vue'
const [, token] = useToken()
const value = computed(() =>
  reduce(token.value, (acc, v, n) => acc + `${n}:${v};`, '')
)
</script>

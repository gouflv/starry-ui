<template>
  <DesignTokenProvider :token="token" :algorithm="algorithm">
    <slot />

    <div class="theme-switch">
      <div class="colors">
        <CarOutlined style="color: white; font-size: 18px" />
        <span
          class="c"
          :style="{
            backgroundColor: origin.colorPrimary
          }"
          @click="token.colorPrimary = origin.colorPrimary"
        ></span>
        <span
          class="c"
          :style="{
            backgroundColor: origin['red-5']
          }"
          @click="token.colorPrimary = origin['red-5']"
        ></span>
        <input type="color" v-model="token.colorPrimary" />
      </div>
      <div class="size">
        <div class="s" title="关怀模式" @click="setLoose">
          <ExpandOutlined />
        </div>
        <div class="s" title="紧凑模式" @click="setCompact">
          <CompressOutlined />
        </div>
        <div class="s" title="还原" @click="setDefault">
          <ReloadOutlined />
        </div>
      </div>
    </div>
  </DesignTokenProvider>
</template>

<script setup lang="ts">
import {
  CarOutlined,
  CompressOutlined,
  ExpandOutlined,
  ReloadOutlined
} from '@ant-design/icons-vue'
import {
  Algorithm,
  AliasToken,
  DesignTokenProvider,
  getDesignToken,
  themes
} from '@starry/theme'
import { ref } from 'vue'

const origin = getDesignToken()

const token = ref<Partial<AliasToken>>({
  colorPrimary: origin.colorPrimary
})

const algorithm = ref<Algorithm[]>()

function setCompact() {
  algorithm.value = [themes.default, themes.compact]
}
function setLoose() {
  algorithm.value = [themes.default, themes.loosen]
}
function setDefault() {
  algorithm.value = undefined
}
</script>

<style scoped>
.theme-switch {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 24px;
  background-color: #444;
  padding: 5px 8px;
  border-radius: 5px;
}
.colors {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.colors .c {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  cursor: pointer;
}
.colors input {
  background-color: #777;
}
.size {
  display: flex;
  gap: 8px;
}
.size .s {
  width: 22px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
}
</style>

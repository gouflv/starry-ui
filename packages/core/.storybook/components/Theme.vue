<template>
  <DesignTokenProvider :token="token" :algorithm="algorithm">
    <slot />

    <div class="theme-switch" @click="open = true" ref="el">
      <div v-if="!open" class="btn">
        <FormatPainterOutlined
          style="color: white; font-size: 18px; cursor: pointer"
        />
        主题
      </div>
      <div v-if="open" class="main">
        <div class="colors">
          <span
            class="c"
            :style="{
              backgroundColor: origin.colorPrimary
            }"
            @click.stop="token.colorPrimary = origin.colorPrimary"
          ></span>
          <span
            class="c"
            :style="{
              backgroundColor: origin['red-5']
            }"
            @click.stop="token.colorPrimary = origin['red-5']"
          ></span>
          <input type="color" v-model="token.colorPrimary" />
        </div>
        <div class="size">
          <div class="s" title="关怀模式" @click.stop="setLoose">
            <ExpandOutlined />
          </div>
          <div class="s" title="紧凑模式" @click.stop="setCompact">
            <CompressOutlined />
          </div>
          <div class="s" title="还原" @click.stop="setDefault">
            <ReloadOutlined />
          </div>
        </div>
      </div>
    </div>
  </DesignTokenProvider>
</template>

<script setup lang="ts">
import {
  CompressOutlined,
  ExpandOutlined,
  FormatPainterOutlined,
  ReloadOutlined
} from '@ant-design/icons-vue'
import {
  Algorithm,
  AliasToken,
  DesignTokenProvider,
  getDesignToken,
  themes
} from '@starry-ui/theme'
import { onClickOutside } from '@vueuse/core'
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

const open = ref(true)
const el = ref()
onClickOutside(el, () => {
  open.value = false
})
</script>

<style scoped>
.theme-switch {
  position: fixed;
  z-index: 999;
  right: 8px;
  bottom: 8px;
  background-color: #444;
  padding: 5px 8px;
  border-radius: 5px;
}
.btn {
  cursor: pointer;
  color: #fff;
}
.main {
  display: flex;
  align-items: center;
  gap: 1rem;
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
  gap: 1rem;
}
.size .s {
  width: 22px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
}
</style>

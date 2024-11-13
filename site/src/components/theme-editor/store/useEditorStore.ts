import { getDesignToken, type GlobalToken } from '@starry/theme'
import { omit } from 'lodash-es'
import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'

export const useEditorStore = defineStore('editor', () => {
  const token = ref(getDesignToken())

  const dirty = ref<Partial<GlobalToken>>({})

  watch(dirty, () => {
    // update token
    token.value = getDesignToken({
      token: dirty.value
    })
  })

  function set(name: keyof GlobalToken, value: string | number) {
    dirty.value = {
      ...dirty.value,
      [name]: value
    }
  }

  function reset(name: keyof GlobalToken) {
    dirty.value = omit(dirty.value, name)
  }

  function checkDirty(name: keyof GlobalToken) {
    return computed(() => {
      return dirty.value[name as keyof GlobalToken] !== undefined
    })
  }

  return {
    token,
    dirty,
    set,
    reset,
    checkDirty
  }
})

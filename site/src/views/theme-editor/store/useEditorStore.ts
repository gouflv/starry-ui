import { useToken, type GlobalToken } from '@starry/theme'
import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'

export const useEditorStore = defineStore('editor', () => {
  // global token
  const [, token] = useToken()

  const original = ref<GlobalToken>()
  const data = ref({} as GlobalToken)
  watch(
    token,
    () => {
      original.value = data.value = { ...token.value }
    },
    {
      immediate: true
    }
  )

  const dirty = computed(() => {
    const keys = Object.keys(data.value) as unknown as Array<keyof GlobalToken>

    const dirty: Partial<GlobalToken> = keys.reduce((acc, key) => {
      if (
        original.value &&
        data.value &&
        original.value[key] !== data.value[key]
      ) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        acc[key] = data.value[key] as any
      }
      return acc
    }, {} as Partial<GlobalToken>)
    return dirty
  })

  function set(name: string, value: string | number) {
    data.value = {
      ...data.value,
      [name as keyof GlobalToken]: value
    }
  }
  function reset(name: keyof GlobalToken) {
    delete data.value[name]
  }
  function checkDirty(name: string) {
    return computed(() => {
      return dirty.value[name as keyof GlobalToken] !== undefined
    })
  }

  return {
    token: data,
    dirty,
    set,
    reset,
    checkDirty
  }
})

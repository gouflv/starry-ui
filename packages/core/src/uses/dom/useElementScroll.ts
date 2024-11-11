import { useThrottleFn, watchImmediate } from '@vueuse/core'
import { onBeforeUnmount, reactive, toRefs, type Ref } from 'vue'

export function useElementScroll(el: Ref<HTMLElement | undefined>) {
  const scroll = reactive({
    top: 0,
    left: 0
  })

  function onScroll(e: Event) {
    const target = e.target as HTMLElement
    scroll.top = target.scrollTop
    scroll.left = target.scrollLeft
  }

  const throttledOnScroll = useThrottleFn(onScroll, 50, true)

  function init() {
    if (el.value) {
      scroll.top = el.value.scrollTop
      scroll.left = el.value.scrollLeft
      el.value.addEventListener('scroll', throttledOnScroll)
    }
  }

  function depose() {
    if (el.value) el.value.removeEventListener('scroll', throttledOnScroll)
  }

  watchImmediate(el, () => {
    if (el.value) init()
    else depose()
  })

  onBeforeUnmount(depose)

  return toRefs(scroll)
}

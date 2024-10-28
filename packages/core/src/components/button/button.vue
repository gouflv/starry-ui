<script lang="ts">
import { defineComponent, h } from 'vue'
import { propsType } from './types'

export default defineComponent({
  name: 'SButton',
  props: propsType(),
  setup() {
    return () => h('button', 'Hello World')
  }
})
</script>

import { useConfig } from '@/config-provider'
import { css } from '@/theme'
import { useToken } from '@/theme/cssinjs'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'SButtonLoading',
  props: {
    existsIcon: Boolean,
    loading: Boolean,
  },
  setup(props) {
    const token = useToken()
    const config = useConfig()

    const classes = computed(() =>
      css({
        display: 'inline-block',
        marginInlineEnd: token.value.marginXS,
      }),
    )

    return () => {
      return props.loading ? (
        <span
          class={[
            `${config.value.prefixCls}ButtonLoadingIcon`,
            ,
            classes.value,
          ]}
        >
          {/* <LoadingOutlined /> */}
        </span>
      ) : null
    }
  },
})

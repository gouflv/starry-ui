import { Button } from '@starry-ui/components'

console.log('Button', Button)

export default {
  title: 'Basic/Button',
  component: Button,
}

const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props"></Button>',
})

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}

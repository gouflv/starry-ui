import { Button } from '@starry-ui/components'
import { action } from '@storybook/addon-actions'

console.log('Button', Button)

export default {
  title: 'Basic/Button',
  component: Button,
  args: {
    onClick: action('click'),
  },
}

const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
})

export const Types = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: `
    <div>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="link">Link</Button>
      <Button type="text">Text</Button>
    </div>
  `,
})

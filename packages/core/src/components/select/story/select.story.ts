import type { Meta, StoryObj } from '@storybook/vue3'
import Select from '../select.vue'

const meta: Meta<typeof Select> = {
  title: '通用/Select',
  component: Select
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: (args) => {
    return {
      components: { Select },
      template: `
        <Select v-bind="args" style="width:200px"/>
      `,
      setup() {
        return { args }
      }
    }
  },
  args: {
    open: true,
    value: 2,
    options: [
      { label: '选项1', value: 1 },
      { label: '选项2', value: 2 },
      { label: '选项3', value: 3 }
    ],
    'onUpdate:value': (...args: any) => console.log(args)
  }
}

export const Empty: Story = {
  render: (args) => {
    return {
      components: { Select },
      template: `
        <Select v-bind="args" />
      `,
      setup() {
        return { args }
      }
    }
  },
  args: {
    open: true,
    value: 2,
    options: []
  }
}

export const Align: Story = {
  render: (args) => {
    return {
      components: { Select },
      template: `
        <div class="cell">
          <Select v-bind="args" style="width:200px" placement="bottomLeft" />
          <Select v-bind="args" style="width:200px" placement="bottomRight" />
        </div>
      `,
      setup() {
        return { args }
      }
    }
  },
  args: {
    open: true,
    value: 2,
    options: [
      { label: '选项1', value: 1 },
      { label: '选项2', value: 2 },
      { label: '选项3', value: 3 }
    ],

    dropdownWidth: 'auto'
  }
}

export const Size: Story = {
  render: (args) => {
    return {
      components: { Select },
      template: `
        <div class="cell">
          <Select v-bind="args" size="small" />
          <Select v-bind="args" size="middle" />
          <Select v-bind="args" size="large" />
        </div>
      `,
      setup() {
        return { args }
      }
    }
  },
  args: {
    options: [
      { label: '选项1', value: 1 },
      { label: '选项2', value: 2 },
      { label: '选项3', value: 3 }
    ]
  }
}

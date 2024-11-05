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
    options: Array.from({ length: 20 }, (_, i) => ({
      label: `选项${i + 1}`,
      value: i + 1
    })),
    'onUpdate:value': (...args: any) => console.log(args)
  }
}

export const DropdownAlign: Story = {
  render: (args) => {
    return {
      components: { Select },
      template: `
        <div class="cell">
          <Select v-bind="args" style="width:200px" placement="left" />
          <Select v-bind="args" style="width:200px" placement="right" />
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

export const DropdownPlacement: Story = {
  render: (args) => {
    return {
      components: { Select },
      template: `
        <div style="height: 200vh">
          <Select v-bind="args" style="width:200px"/>
          <Select v-bind="args" style="width:200px; position: 'relative'; top: 100vh"/>
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
    options: Array.from({ length: 20 }, (_, i) => ({
      label: `选项${i + 1}`,
      value: i + 1
    })),
    'onUpdate:value': (...args: any) => console.log(args)
  }
}

export const Size: Story = {
  render: (args) => {
    return {
      components: { Select },
      template: `
        <div class="cell">
          <Select v-bind="args" size="small" style="width: 140px" />
          <Select v-bind="args" size="middle" style="width: 140px" />
          <Select v-bind="args" size="large" style="width: 140px" />
        </div>
        <div class="cell">
          <Select v-bind="args" size="small" placeholder="Very looooooooog" style="width: 60px" />
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

export const BorderLess: Story = {
  render: (args) => {
    return {
      components: { Select },
      template: `
        <Select v-bind="args" :bordered="false" />
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

export const Loading: Story = {
  render: (args) => {
    return {
      components: { Select },
      template: `
        <Select v-bind="args" loading />
      `,
      setup() {
        return { args }
      }
    }
  },
  args: {
    open: true,
    options: [
      { label: '选项1', value: 1 },
      { label: '选项2', value: 2 },
      { label: '选项3', value: 3 }
    ]
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
    open: true
  }
}

export const Disabled: Story = {
  render: (args) => {
    return {
      components: { Select },
      template: `
        <div class="cell">
          <Select v-bind="args" disabled />
          <Select v-bind="args" disabled :bordered="false" />
        </div>
      `,
      setup() {
        return { args }
      }
    }
  }
}

export const Filter: Story = {
  render: (args) => {
    return {
      components: { Select },
      template: `
        <div class="cell">
          <Select v-bind="args" showSearch style="width: 200px">
        </div>
      `,
      setup() {
        return { args }
      }
    }
  },
  args: {
    open: true,
    options: Array.from({ length: 20 }, (_, i) => ({
      label: `选项${i + 1}`,
      value: i + 1
    }))
  }
}

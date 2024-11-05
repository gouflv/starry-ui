import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
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
    value: 2,
    options: Array.from({ length: 5 }, (_, i) => ({
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
  }
}

export const Disabled: Story = {
  render: (args) => {
    return {
      components: { Select },
      template: `
        <div class="cell">
          <Select v-bind="args" />
          <Select v-bind="args" :bordered="false" />
        </div>
      `,
      setup() {
        return { args }
      }
    }
  },
  args: {
    disabled: true
  }
}

export const Filter: Story = {
  render: (args) => {
    return {
      components: { Select },
      template: `
        <div class="cell">
          <Select v-bind="args" style="width: 200px" />
        </div>
      `,
      setup() {
        return { args }
      }
    }
  },
  args: {
    options: Array.from({ length: 20 }, (_, i) => ({
      label: `选项${i + 1}`,
      value: i + 1
    })),
    showSearch: true
  }
}

export const Search: Story = {
  render: (args) => {
    return {
      components: { Select },
      template: `
        <div class="cell">
          <Select :options="options" :loading="loading" v-bind="args" style="width: 200px" @search="onSearch" />
        </div>
      `,
      setup() {
        function createOptions() {
          return Array.from({ length: 10 }, (_, i) => ({
            label: `选项${i + 1}`,
            value: i + 1
          }))
        }

        const loading = ref(false)
        const options = ref(createOptions())
        function onSearch(value: string) {
          console.info('search:', value)
          loading.value = true
          setTimeout(() => {
            options.value = createOptions()
            loading.value = false
          }, 1000)
        }
        return { options, loading, onSearch, args }
      }
    }
  },
  args: {
    showSearch: true,
    filterOption: false
  }
}

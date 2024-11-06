import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Select from '../select.vue'

const meta: Meta<typeof Select> = {
  title: '数据录入/Select',
  component: Select
}

export default meta
type Story = StoryObj<typeof Select>

function genOptions(len = 10) {
  return Array.from({ length: len }, (_, i) => ({
    label: `选项${i + 1}`,
    value: i + 1
  }))
}

export const Default: Story = {
  render: (args) => ({
    setup() {
      return () => <Select {...args} style="width:200px" />
    }
  }),
  args: {
    value: 2,
    options: genOptions(),
    'onUpdate:value': (...args: any) => console.log(args)
  }
}

export const DropdownAlign: Story = {
  render: (args) => ({
    setup() {
      return () => (
        <div class="cell">
          <Select {...args} style="width:200px" placement="left" />
          <Select {...args} style="width:200px" placement="right" />
        </div>
      )
    }
  }),
  args: {
    open: true,
    options: genOptions(3),
    dropdownWidth: 'auto'
  }
}

export const DropdownPlacement: Story = {
  render: (args) => ({
    setup() {
      return () => (
        <div style="height: 200vh">
          <Select {...args} style="width:200px" />
          <Select
            {...args}
            style="width:200px; position: 'relative'; top: 100vh"
          />
        </div>
      )
    }
  }),
  args: {
    open: true,
    options: genOptions(),
    'onUpdate:value': (...args: any) => console.log(args)
  }
}

export const Size: Story = {
  render: (args) => ({
    setup() {
      return () => (
        <>
          <div class="cell">
            <Select {...args} size="small" style="width: 140px" />
            <Select {...args} size="middle" style="width: 140px" />
            <Select {...args} size="large" style="width: 140px" />
          </div>
          <div class="cell">
            <Select
              {...args}
              size="small"
              placeholder="Very looooooooog"
              style="width: 60px"
            />
          </div>
        </>
      )
    }
  }),
  args: {
    options: genOptions()
  }
}

export const BorderLess: Story = {
  render: (args) => ({
    setup() {
      return () => <Select {...args} bordered={false} />
    }
  }),
  args: {
    options: genOptions()
  }
}

export const Loading: Story = {
  render: (args) => ({
    setup() {
      return () => <Select {...args} loading />
    }
  }),
  args: {
    options: genOptions()
  }
}

export const Empty: Story = {
  render: (args) => ({
    setup() {
      return () => <Select {...args} />
    }
  })
}

export const Disabled: Story = {
  render: (args) => ({
    setup() {
      return () => (
        <div class="cell">
          <Select {...args} />
          <Select {...args} bordered={false} />
        </div>
      )
    }
  }),
  args: {
    disabled: true
  }
}

export const Filter: Story = {
  render: (args) => ({
    setup() {
      return () => (
        <div class="cell">
          <Select {...args} style="width: 200px" />
        </div>
      )
    }
  }),
  args: {
    options: genOptions(20),
    showSearch: true
  }
}

export const Search: Story = {
  render: (args) => ({
    setup() {
      const loading = ref(false)
      const options = ref(genOptions(10))
      function onSearch(value: string) {
        console.info('search:', value)
        loading.value = true
        setTimeout(() => {
          options.value = genOptions(10)
          loading.value = false
        }, 1000)
      }
      return () => (
        <Select
          {...args}
          options={options.value}
          loading={loading.value}
          style="width: 200px"
          onSearch={onSearch}
        />
      )
    }
  }),
  args: {
    showSearch: true,
    filterOption: false
  }
}

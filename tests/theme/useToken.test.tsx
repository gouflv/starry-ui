import { DesignTokenProvider } from '@starry-ui/theme'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import TokenRender from './components/TokenRender.vue'

test('should TokenRender works', () => {
  const vm = mount(TokenRender)
  expect(vm.html()).toMatchSnapshot()
})

test('should ThemeProvider works', () => {
  const app = {
    components: { DesignTokenProvider, TokenRender },
    template: `
      <DesignTokenProvider :token="{ colorPrimary: 'red' }">
        <TokenRender />
      </DesignTokenProvider>
    `
  }
  const vm = mount(app)
  expect(vm.text().includes('colorPrimary:red')).toBe(true)
})

test('should ThemeProvider works in nesting', () => {
  const app = {
    components: { DesignTokenProvider, TokenRender },
    template: `
      <DesignTokenProvider :token="{ colorPrimary: 'red' }">
        <DesignTokenProvider>
          <TokenRender />
        </DesignTokenProvider>
      </DesignTokenProvider>
    `
  }
  const vm = mount(app)
  expect(vm.text().includes('colorPrimary:red')).toBe(false)
})

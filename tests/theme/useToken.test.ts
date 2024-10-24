import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import TokenRender from './components/TokenRender.vue'

test('should TokenRender works', () => {
  const vm = mount(TokenRender)
  expect(vm.html()).toMatchSnapshot('all tokens')
})

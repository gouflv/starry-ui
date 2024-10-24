import { themes } from '@starry/theme'
import { beforeEach, expect, test } from 'vitest'
import getDesignToken from '../../packages/theme/src/cssinjs/utils/getDesignToken'
import { GlobalToken } from '../../packages/theme/src/interface'
import { objectDiff } from '../utils'

let originToken: GlobalToken

beforeEach(() => {
  originToken = getDesignToken()
})

test('should it works', () => {
  expect(originToken).toMatchSnapshot('default designs token')
})

test('should it works with custom seed token', () => {
  const token = getDesignToken({
    token: {
      colorPrimary: 'red'
    }
  })
  expect(token.colorPrimary).toBe('red')
  expect(objectDiff(token, originToken)).toMatchSnapshot('custom seed token')
})

test('should it works with custom seed token 2', () => {
  const token = getDesignToken({
    token: {
      colorPrimary: 'red',
      colorTextBase: 'blue'
    }
  })
  expect(token.colorPrimary).toBe('red')
  expect(token.colorTextBase).toBe('blue')
  expect(objectDiff(token, originToken)).toMatchSnapshot('custom seed token')
})

test('should it works with custom map token', () => {
  const token = getDesignToken({
    token: {
      colorText: 'blue'
    }
  })
  expect(token.colorText).toBe('blue')
  expect(objectDiff(token, originToken)).toMatchSnapshot('custom map token')
})

test('should it works with compact algorithm', () => {
  const token = getDesignToken({
    token: {},
    derivative: [themes.default, themes.compact]
  })
  expect(objectDiff(token, originToken)).toMatchSnapshot('compact algorithm')
})

test('should it works with loosen algorithm', () => {
  const token = getDesignToken({
    token: {},
    derivative: [themes.default, themes.loosen]
  })
  expect(objectDiff(token, originToken)).toMatchSnapshot('loosen algorithm')
})

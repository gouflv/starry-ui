import { isEqual } from 'lodash-es'
import { beforeEach, expect, test } from 'vitest'
import { themes } from '..'
import { AliasToken } from '../interface'
import getDesignToken from './getDesignToken'

export function objectDiff(a: any, b: any) {
  let diff: { [key: string]: any } = {}
  for (const key in a) {
    if (!isEqual(a[key], b[key])) {
      diff[key] = a[key]
    }
  }
  return diff
}

let originToken: AliasToken

beforeEach(() => {
  originToken = getDesignToken()
})

test('should it works', () => {
  expect(originToken).toMatchSnapshot('default designs token')
})

test('should it works with custom seed token {colorPrimary: red}', () => {
  const token = getDesignToken({
    token: {
      colorPrimary: 'red'
    }
  })
  expect(token.colorPrimary).toBe('red')
  expect(objectDiff(token, originToken)).toMatchSnapshot('custom seed token')
})

test('should it works with custom seed token {colorTextBase: blue}', () => {
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

test('should it works with custom map token {colorText: blue}', () => {
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

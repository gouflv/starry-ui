import { isEqual } from 'lodash-es'

export function objectDiff(a: any, b: any) {
  let diff: { [key: string]: any } = {}
  for (const key in a) {
    if (!isEqual(a[key], b[key])) {
      diff[key] = a[key]
    }
  }
  return diff
}

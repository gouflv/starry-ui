import { type PropType } from 'vue'

export function objectType<T = object>(defaultVal?: T) {
  return { type: Object as PropType<T>, default: defaultVal as T }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function arrayType<T extends any[]>(defaultVal?: T) {
  return { type: Array as unknown as PropType<T>, default: defaultVal as T }
}

export function eventType<T>() {
  return { type: [Function, Array] as PropType<T | T[]> }
}

export function functionType<T = () => object>(defaultVal?: T) {
  return { type: Function as PropType<T>, default: defaultVal as T }
}

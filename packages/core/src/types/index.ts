import { type Ref } from 'vue'

export type MaybeRef<T> = T | Ref<T>
export * from './component'
export * from './event'

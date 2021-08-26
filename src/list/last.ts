import { List } from "../type-utils"

export type Last<T extends List> = T extends readonly [...unknown[], infer V]
  ? V
  : undefined

const last = <T extends List>(ar: T) => ar[ar.length - 1] as Last<T>

export { last }

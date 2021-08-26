import { List } from "../type-utils"

export type Head<T> = T extends List ? T[0] : undefined

const head = <T extends List>(ar: T) => ar[0] as Head<T>

export { head }

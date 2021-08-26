import { List } from "../type-utils"

export type Tail<T extends List> = T extends readonly [unknown?, ...infer Rest]
  ? Rest
  : T

const tail = <T extends readonly unknown[]>(ar: T) => ar.slice(1) as Tail<T>

export { tail }

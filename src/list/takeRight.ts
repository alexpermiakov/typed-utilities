import { TooLong, List } from "../type-utils"
import { Last } from "./last"
import { Init } from "./init"

export type TakeRight<
  L extends List,
  K extends number = 1,
  R extends unknown[] = [],
> = {
  recur: TakeRight<Init<L>, K, [Last<L>, ...R]>
  done: R
}[K extends R["length"] ? "done" : "recur"]

type SafeTakeRight<
  T extends List,
  K extends number = 1,
> = TooLong<T> extends true ? T[number][] : TakeRight<T, K>

const takeRight = <T extends List, K extends number = 1>(a: T, k: K) =>
  a.slice(0, k) as SafeTakeRight<T, K>

export { takeRight }

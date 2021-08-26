import { TooLong, List } from "../type-utils"
import { Head } from "./head"
import { Tail } from "./tail"

export type Take<
  L extends List,
  K extends number = 1,
  R extends unknown[] = [],
> = {
  recur: Take<Tail<L>, K, [...R, Head<L>]>
  done: R
}[K extends R["length"] ? "done" : "recur"]

type SafeTake<L extends List, K extends number = 1> = TooLong<L> extends true
  ? L[number][]
  : Take<L, K>

const take = <T extends List, K extends number = 1>(a: T, k: K) =>
  a.slice(0, k) as SafeTake<T, K>

export { take }

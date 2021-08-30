import { TooLong, List } from "../type-utils"
import { Head } from "./head"
import { Tail } from "./tail"

export type Difference<
  L extends List,
  R extends List,
  D extends unknown[] = [],
> = {
  recur: Difference<Tail<L>, R, Head<L> extends R[number] ? D : [...D, Head<L>]>
  done: D
}[L["length"] extends 0 ? "done" : "recur"]

type SafeDifference<L extends List, R extends List> = TooLong<
  [...L, ...R]
> extends false
  ? Difference<L, R>
  : (L[number] | R[number])[]

const difference = <T extends List, U extends List>(a: T, b: U) =>
  a.filter((x) => !b.includes(x)) as SafeDifference<T, U>

export { difference }

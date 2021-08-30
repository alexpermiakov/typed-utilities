import { TooLong20, NestedArrayToUnion, List } from "../type-utils"
import { Head } from "./head"
import { Tail } from "./tail"

type Flat<
  L extends List,
  R extends unknown[] = [],
  H = Head<L>,
  T extends List = Tail<L>,
> = {
  recur: H extends List ? Flat<T, [...Flat<H, R>]> : Flat<T, [...R, H]>
  done: R
}[L["length"] extends 0 ? "done" : "recur"]

type SafeFlat<
  L extends List,
  D extends number = 1,
  R extends unknown[] = [],
> = TooLong20<L> extends true ? NestedArrayToUnion<L, D>[] : Flat<L, R>

const flat = <T extends List, D extends number = 1>(a: T, d?: D) =>
  a.flat(d || 1) as SafeFlat<T, D>

export { flat }

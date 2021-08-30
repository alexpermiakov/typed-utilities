import { TooLong20, List } from "../type-utils"
import { Head } from "./head"
import { Tail } from "./tail"

export type Intersection<
  L extends List,
  U extends List,
  R extends unknown[] = [],
  H = Head<L>,
> = {
  recur: Intersection<Tail<L>, U, H extends U[number] ? [...R, H] : R>
  done: R
}[L["length"] extends 0 ? "done" : "recur"]

type SafeIntersection<
  T extends List,
  U extends List,
> = TooLong20<T> extends true ? (T[number] | U[number])[] : Intersection<T, U>

const intersection = <T extends List, U extends List>(a: T, b: U) =>
  a.filter((x) => b.includes(x)) as SafeIntersection<T, U>

export { intersection }

import { TooLong, List } from "../type-utils"
import { Head } from "./head"
import { Tail } from "./tail"

type Reverse<L extends List, R extends unknown[] = []> = {
  recur: Reverse<Tail<L>, [Head<L>, ...R]>
  done: R
}[L["length"] extends 0 ? "done" : "recur"]

type SafeReverse<T extends readonly unknown[]> = TooLong<T> extends true
  ? T[number][]
  : Reverse<T>

const reverse = <T extends readonly unknown[]>(ar: T) =>
  [...ar].reverse() as SafeReverse<T>

export { reverse }

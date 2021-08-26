import { Falsy, TooLong, List } from "../type-utils"
import { Head } from "./head"
import { Tail } from "./tail"

type Compact<L extends List, D extends unknown[] = []> = {
  recur: Compact<Tail<L>, Head<L> extends Falsy ? D : [...D, Head<L>]>
  done: D
}[L["length"] extends 0 ? "done" : "recur"]

type SafeCompact<T extends List> = TooLong<T> extends true
  ? T[number][]
  : Compact<T>

const compact = <T extends List>(a: T) => a.filter((v) => !!v) as SafeCompact<T>

export { compact }

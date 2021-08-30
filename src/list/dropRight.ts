import { Prev, TooLong, List } from "../type-utils"
import { Init } from "./init"

type DropRight<L extends List, K extends number = 1> = {
  recur: DropRight<Init<L>, Prev<K>>
  done: L
}[K extends 0 ? "done" : "recur"]

type SafeDropRight<
  L extends List,
  K extends number = 1,
> = TooLong<L> extends false ? DropRight<L, K> : L[number][]

const dropRight = <T extends List, K extends number>(a: T, k: K) => {
  if (a.length <= k) return [] as unknown as SafeDropRight<T, K>
  return a.slice(0, a.length - k) as unknown as SafeDropRight<T, K>
}

export { dropRight }

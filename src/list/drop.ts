import { TooLong, List, Prev } from "../type-utils"
import { Tail } from "./tail"

type Drop<L extends List, K extends number = 1> = {
  recur: Drop<Tail<L>, Prev<K>>
  done: L
}[K extends 0 ? "done" : "recur"]

type SafeDrop<L extends List, K extends number = 1> = TooLong<L> extends false
  ? Drop<L, K>
  : L[number][]

const drop = <T extends List, K extends number>(a: T, k: K) => {
  if (a.length <= k) return [] as unknown as SafeDrop<T, K>
  return a.slice(k) as unknown as SafeDrop<T, K>
}

export { drop }

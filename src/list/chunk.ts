import { List, TooLong } from "../type-utils"
import { Take } from "./take"

type Chunk<
  L extends List,
  K extends number,
  P extends unknown[] = Take<L, K>,
> = L extends readonly [...P, ...infer R]
  ? P extends []
    ? []
    : [P, ...Chunk<R, K>]
  : []

type SafeChunk<L extends List, K extends number> = TooLong<L> extends true
  ? [L[number][]]
  : Chunk<L, K>

const chunk = <T extends List, K extends number>(a: T, k: K) => {
  const res = []
  const n = a.length

  for (let i = 0; i < n; i += k) {
    let chunk = a.slice(i, i + k)
    res.push(chunk)
  }
  return res as SafeChunk<T, K>
}

export { chunk }

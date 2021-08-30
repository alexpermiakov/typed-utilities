import { List, TooLong } from "../type-utils"

export type Take<
  T extends readonly unknown[],
  K extends number = 1,
  R extends unknown[] = [],
> = K extends R["length"]
  ? R
  : T extends readonly [infer V, ...infer Rest]
  ? Take<Rest, K, [...R, V]>
  : R

type Chunk<
  T extends readonly unknown[],
  K extends number,
  P extends unknown[] = Take<T, K>,
> = T extends readonly [...P, ...infer R]
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

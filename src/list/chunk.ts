export type Count<T, S extends number[] = []> = T extends S["length"]
  ? S
  : Count<T, [...S, 0]>

export type Dec<T> = Count<T> extends [unknown, ...infer Tail]
  ? Tail["length"]
  : 0

export type Inc<T> = [...Count<T>, 0]["length"]

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

export type TooLong<T extends readonly unknown[], D = 15> = T extends readonly [
  unknown,
  ...infer R
]
  ? D extends 1
    ? true
    : TooLong<R, Dec<D>>
  : false

type SafeChunk<
  T extends readonly unknown[],
  K extends number,
> = TooLong<T> extends true ? [T[number][]] : Chunk<T, K>

const chunk = <T extends readonly unknown[], K extends number>(a: T, k: K) => {
  const res = []
  const n = a.length

  for (let i = 0; i < n; i += k) {
    let chunk = a.slice(i, i + k)
    res.push(chunk)
  }
  return res as SafeChunk<T, K>
}


export { chunk }

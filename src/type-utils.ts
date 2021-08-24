export type Count<T, S extends number[] = []> = T extends S["length"]
  ? S
  : Count<T, [...S, 0]>

export type Dec<T> = Count<T> extends [unknown, ...infer Tail]
  ? Tail["length"]
  : 0

export type Inc<T> = [...Count<T>, 0]["length"]

export type Falsy = null | 0 | undefined | false | ""

export type TooLong<T extends readonly unknown[], D = 15> = T extends readonly [
  unknown,
  ...infer R
]
  ? D extends 1
    ? true
    : TooLong<R, Dec<D>>
  : false

export type TupleToUnion<T extends unknown[]> = T[number]

// export type UnionToTuple<T, P = T, K extends unknown[] = []> = P1

import { TooLong20, NestedArrayToUnion, List } from "../type-utils"

type Flat<T extends List, R extends unknown[] = []> = T extends readonly [
  infer V,
  ...infer Rest
]
  ? V extends List
    ? Flat<Rest, [...Flat<V, R>]>
    : Flat<Rest, [...R, V]>
  : R

type SafeFlat<
  T extends List,
  D extends number = 1,
  R extends unknown[] = [],
> = TooLong20<T> extends true ? NestedArrayToUnion<T, D>[] : Flat<T, R>

const flat = <T extends List, D extends number = 1>(a: T, d?: D) =>
  a.flat(d || 1) as SafeFlat<T, D>

export { flat }

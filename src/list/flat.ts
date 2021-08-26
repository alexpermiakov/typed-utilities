import { TooLong20, NestedArrayToUnion } from "../type-utils"

type Flat<
  T extends readonly unknown[],
  R extends unknown[] = [],
> = T extends readonly [infer V, ...infer Rest]
  ? V extends readonly unknown[]
    ? Flat<Rest, [...Flat<V, R>]>
    : Flat<Rest, [...R, V]>
  : R

type SafeFlat<
  T extends readonly unknown[],
  D extends number = 1,
  R extends unknown[] = [],
> = TooLong20<T> extends true ? NestedArrayToUnion<T, D>[] : Flat<T, R>

const flat = <T extends readonly unknown[], D extends number = 1>(
  a: T,
  d?: D,
) => a.flat(d || 1) as SafeFlat<T, D>

export { flat }

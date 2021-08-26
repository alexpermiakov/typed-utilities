import { TooLong20 } from "../type-utils"

export type Intersection<
  T extends readonly unknown[],
  U extends readonly unknown[],
  R extends unknown[] = [],
> = T extends readonly [infer V, ...infer Rest]
  ? V extends U[number]
    ? Intersection<Rest, U, [...R, V]>
    : Intersection<Rest, U, R>
  : R

type SafeIntersection<
  T extends readonly unknown[],
  U extends readonly unknown[],
> = TooLong20<T> extends true ? (T[number] | U[number])[] : Intersection<T, U>

const intersection = <
  T extends readonly unknown[],
  U extends readonly unknown[],
>(
  a: T,
  b: U,
) => a.filter((x) => b.includes(x)) as SafeIntersection<T, U>

export { intersection }

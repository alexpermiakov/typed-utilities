import { TooLong20, List } from "../type-utils"

export type Intersection<
  T extends List,
  U extends List,
  R extends unknown[] = [],
> = T extends readonly [infer V, ...infer Rest]
  ? V extends U[number]
    ? Intersection<Rest, U, [...R, V]>
    : Intersection<Rest, U, R>
  : R

type SafeIntersection<
  T extends List,
  U extends List,
> = TooLong20<T> extends true ? (T[number] | U[number])[] : Intersection<T, U>

const intersection = <T extends List, U extends List>(a: T, b: U) =>
  a.filter((x) => b.includes(x)) as SafeIntersection<T, U>

export { intersection }

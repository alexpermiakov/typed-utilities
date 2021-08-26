import { TooLong, List } from "../type-utils"

export type Difference<
  L extends List,
  R extends List,
  D extends unknown[] = [],
> = L extends readonly [infer V, ...infer Rest]
  ? V extends R[number]
    ? Difference<Rest, R, D>
    : Difference<Rest, R, [...D, V]>
  : D

type SafeDifference<L extends List, R extends List> = TooLong<
  [...L, ...R]
> extends false
  ? Difference<L, R>
  : (L[number] | R[number])[]

const difference = <T extends List, U extends List>(a: T, b: U) =>
  a.filter((x) => !b.includes(x)) as SafeDifference<T, U>

export { difference }

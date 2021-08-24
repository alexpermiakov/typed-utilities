import { TooLong } from "./type-utils"

export type Difference<
  L extends readonly unknown[],
  R extends readonly unknown[],
  D extends unknown[] = [],
> = L extends readonly [infer V, ...infer Rest]
  ? V extends R[number]
    ? Difference<Rest, R, D>
    : Difference<Rest, R, [...D, V]>
  : D

type SaveDifference<
  L extends readonly unknown[],
  R extends readonly unknown[],
> = TooLong<[...L, ...R]> extends false
  ? Difference<L, R>
  : (L[number] | R[number])[]

const difference = <T extends readonly unknown[], U extends readonly unknown[]>(
  a: T,
  b: U,
) => a.filter((x) => !b.includes(x)) as SaveDifference<T, U>

export { difference }

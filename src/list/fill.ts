import { Dec } from "../type-utils"

type Fill<
  T extends readonly unknown[],
  C,
  B extends number,
  E extends number,
> = T extends readonly [infer V, ...infer Rest]
  ? B extends 0
    ? E extends 0
      ? T
      : [C, ...Fill<Rest, C, 0, Dec<E>>]
    : [V, ...Fill<Rest, C, Dec<B>, Dec<E>>]
  : []

const fill = <
  T extends readonly unknown[],
  C,
  B extends number = 0,
  E extends number = T["length"],
>(
  ar: T,
  c: C,
  begin?: B,
  end?: E,
) => (ar as unknown as unknown[]).fill(c, begin, end) as Fill<T, C, B, E>

const ar = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
] as const

const val = fill(ar, "*" as const, 15, 20)
export { fill }

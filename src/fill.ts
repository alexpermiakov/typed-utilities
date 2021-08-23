import { Dec } from "./type-utils"

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

const ar = [4, 6, 8, 10, 12, 14, 16] as const

const val = fill(ar, "*" as const, 1, 4)

export { fill }

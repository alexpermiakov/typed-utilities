export type Intersection<
  L extends readonly unknown[],
  R extends readonly unknown[],
> = L extends readonly [infer V, ...infer Rest]
  ? V extends R[number]
    ? [V, ...Intersection<Rest, R>]
    : Intersection<Rest, R>
  : []

const intersection = <
  T extends readonly unknown[],
  U extends readonly unknown[],
>(
  a: T,
  b: U,
) => a.filter((x) => b.includes(x)) as Intersection<T, U>

const ar1 = [1, 2, 3, 4, 9] as const
const ar2 = [7, 6, 5, 4, 3] as const

const intrRes = intersection(ar1, ar2)

export { intersection }

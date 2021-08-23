// extends readonly unknown[]

export type Union<
  L extends readonly unknown[],
  R extends readonly unknown[],
> = L extends readonly [infer V, ...infer Rest]
  ? V extends R[number]
    ? [V, ...Union<Rest, R>]
    : Union<Rest, R>
  : []

const union = <T extends readonly unknown[], U extends readonly unknown[]>(
  a: T,
  b: U,
) => [...new Set([...a, ...b])] as Union<T, U>

const ar1 = [1, 2, 2] as const
const ar2 = [3, 4, 5] as const

const uRes = union(ar1, ar2)

export { union }

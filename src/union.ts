import { Uniq } from "./uniq"

export type Union<
  L extends readonly unknown[],
  R extends readonly unknown[],
> = Uniq<[...L, ...R]>

const union = <T extends readonly unknown[], U extends readonly unknown[]>(
  a: T,
  b: U,
) => [...new Set([...a, ...b])] as Union<T, U>

export { union }

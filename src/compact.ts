import { Falsy } from "./type-utils"

type Compact<A extends readonly unknown[]> = A extends readonly [
  infer V,
  ...infer Rest
]
  ? V extends Falsy
    ? Compact<Rest>
    : [V, ...Compact<Rest>]
  : []

const compact = <T extends readonly unknown[]>(a: T) =>
  a.filter((v) => !!v) as Compact<T>

const ar = [0, 1, false, 2, "", 3] as const

const val2 = compact(ar)

export { compact }

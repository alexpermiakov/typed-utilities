import { Falsy, TooLong } from "./type-utils"

type Compact<A extends readonly unknown[]> = A extends readonly [
  infer V,
  ...infer Rest
]
  ? V extends Falsy
    ? Compact<Rest>
    : [V, ...Compact<Rest>]
  : []

type SaveCompact<T extends readonly unknown[]> = TooLong<T> extends true
  ? T[number][]
  : Compact<T>

const compact = <T extends readonly unknown[]>(a: T) =>
  a.filter((v) => !!v) as SaveCompact<T>

export { compact }

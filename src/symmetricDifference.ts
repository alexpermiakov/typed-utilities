import { Difference } from "./difference"

type SymmetricDifference<
  L extends readonly unknown[],
  R extends readonly unknown[],
> = [...Difference<L, R>, ...Difference<R, L>]

function symmetricDifference<
  T extends readonly unknown[],
  U extends readonly unknown[],
>(a: T, b: U) {
  return a
    .filter((x) => !b.includes(x))
    .concat(b.filter((x) => !a.includes(x))) as SymmetricDifference<T, U>
}

const m1 = [1, 2, 3, 4, 9] as const
const m2 = [7, 6, 5, 4, 3] as const

const v = symmetricDifference(m1, m2)

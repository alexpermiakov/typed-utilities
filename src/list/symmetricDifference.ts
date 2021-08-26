import { TooLong } from "../type-utils"
import { Difference } from "./difference"

type SymmetricDifference<
  L extends readonly unknown[],
  R extends readonly unknown[],
> = [...Difference<L, R>, ...Difference<R, L>]

type SafeSymmetricDifference<
  L extends readonly unknown[],
  R extends readonly unknown[],
> = TooLong<[...L, ...R]> extends false
  ? SymmetricDifference<L, R>
  : (L[number] | R[number])[]

const symmetricDifference = <
  T extends readonly unknown[],
  U extends readonly unknown[],
>(
  a: T,
  b: U,
) =>
  a
    .filter((x) => !b.includes(x))
    .concat(b.filter((x) => !a.includes(x))) as SafeSymmetricDifference<T, U>

export { symmetricDifference }

import { Difference } from "./difference"

type SymmetricDifference<
  L extends readonly unknown[],
  R extends readonly unknown[],
> = [...Difference<L, R>, ...Difference<R, L>]

const symmetricDifference = <
  T extends readonly unknown[],
  U extends readonly unknown[],
>(
  a: T,
  b: U,
) =>
  a
    .filter((x) => !b.includes(x))
    .concat(b.filter((x) => !a.includes(x))) as SymmetricDifference<T, U>

export { symmetricDifference }

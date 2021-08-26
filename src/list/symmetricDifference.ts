import { TooLong, List } from "../type-utils"
import { Difference } from "./difference"

type SymmetricDifference<L extends List, R extends List> = [
  ...Difference<L, R>,
  ...Difference<R, L>
]

type SafeSymmetricDifference<L extends List, R extends List> = TooLong<
  [...L, ...R]
> extends false
  ? SymmetricDifference<L, R>
  : (L[number] | R[number])[]

const symmetricDifference = <T extends List, U extends List>(a: T, b: U) =>
  a
    .filter((x) => !b.includes(x))
    .concat(b.filter((x) => !a.includes(x))) as SafeSymmetricDifference<T, U>

export { symmetricDifference }

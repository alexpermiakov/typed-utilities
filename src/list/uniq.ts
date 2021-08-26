import { TupleToUnion, UnionToTuple } from "../type-utils"

export type Uniq<T extends readonly unknown[]> = UnionToTuple<TupleToUnion<T>>

const uniq = <T extends readonly unknown[]>(ar: T) =>
  [...new Set(ar)] as unknown as Uniq<T>

export { uniq }

import { TupleToUnion, UnionToTuple, List } from "../type-utils"

export type Uniq<T extends List> = UnionToTuple<TupleToUnion<T>>

const uniq = <T extends List>(ar: T) => [...new Set(ar)] as unknown as Uniq<T>

export { uniq }

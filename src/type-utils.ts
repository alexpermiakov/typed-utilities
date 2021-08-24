export type Count<T, S extends number[] = []> = T extends S["length"]
  ? S
  : Count<T, [...S, S["length"]]>

export type Dec<T> = Count<T> extends [unknown, ...infer Tail]
  ? Tail["length"]
  : 0

export type Falsy = null | 0 | undefined | false | ""

type StackDepth = 40

type Indexes = Count<StackDepth>[number]

export type TooLong<T extends readonly unknown[]> = T["length"] extends Indexes
  ? false
  : true

export type TupleToUnion<T extends readonly unknown[]> = T[number]

type UnionToIntersection<U> = (
  U extends unknown ? (arg: U) => void : never
) extends (arg: infer I) => void
  ? I
  : never

type LastInUnion<U> = UnionToIntersection<
  U extends unknown ? (x: U) => void : never
> extends (x: infer L) => void
  ? L
  : never

export type UnionToTuple<U, Last = LastInUnion<U>> = [U] extends [never]
  ? []
  : [...UnionToTuple<Exclude<U, Last>>, Last]

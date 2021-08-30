export type Count<T, S extends number[] = []> = T extends S["length"]
  ? S
  : Count<T, [...S, S["length"]]>

export type Dec<T> = Count<T> extends [unknown, ...infer Tail]
  ? Tail["length"]
  : 0

export type Falsy = null | 0 | undefined | false | ""

export type List<A = unknown> = ReadonlyArray<A>

type Indexes = Count<40>[number]
type Indexes20 = Count<20>[number]

export type TooLong<T extends List> = T["length"] extends Indexes ? false : true

export type TooLong20<T extends List> = T["length"] extends Indexes20
  ? false
  : true

export type TupleToUnion<T extends List> = T[number]

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

export type StackDepth = [
  -1,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
]

export type Prev<I extends number> = StackDepth[I]

export type NestedArrayToUnion<Arr, D extends number = 20> = {
  done: Arr
  recur: Arr extends ReadonlyArray<infer InnerArr>
    ? NestedArrayToUnion<InnerArr, StackDepth[D]>
    : Arr
}[D extends -1 ? "done" : "recur"]

export type Extends<A1 extends unknown, A2 extends unknown> = [A1] extends [
  never,
]
  ? 0
  : A1 extends A2
  ? 1
  : 0

type BuildTupleWithChar<
  L extends number,
  C extends unknown = "*",
  T extends unknown[] = [],
> = T["length"] extends L ? T : BuildTupleWithChar<L, C, [...T, C]>

export type Subtract<
  A extends number,
  B extends number,
> = BuildTupleWithChar<A> extends [...infer U, ...BuildTupleWithChar<B>]
  ? U["length"]
  : never

export type Repeat<K extends number, C extends unknown> = BuildTupleWithChar<
  K,
  C
>

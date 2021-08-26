import { Prev, List } from "../type-utils"
import { Take } from "./take"
import { TakeRight } from "./takeRight"
import { Head } from "./head"
import { Tail } from "./tail"
import { Concat } from "./concat"

type Repeat<T extends unknown> = [T]

type Fill<
  L extends List,
  C extends unknown,
  B extends number = 1,
  E extends number = 1,
> = [...Take<L, B>]

const fill = <
  T extends List,
  C,
  B extends number = 0,
  E extends number = T["length"],
>(
  ar: T,
  c: C,
  begin?: B,
  end?: E,
) => (ar as unknown as unknown[]).fill(c, begin, end) as Fill<T, C, B, E>

type LL = Fill<
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  10
>

const ar = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
] as const

const val = fill(ar, "*" as const, 10, 15)

export { fill }

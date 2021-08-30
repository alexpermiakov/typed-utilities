import { List, Subtract, Repeat } from "../type-utils"
import { Take } from "./take"
import { TakeRight } from "./takeRight"

type Fill<
  L extends List,
  C extends unknown,
  B extends number = 10,
  E extends number = 1,
> = Take<L, B> extends [...infer P1]
  ? TakeRight<L, Subtract<L["length"], E>> extends [...infer P2]
    ? [...P1, ...Repeat<Subtract<E, B>, C>, ...P2]
    : L[number][]
  : L[number][]

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

export { fill }

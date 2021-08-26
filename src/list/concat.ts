import { List } from "../type-utils"

export type Concat<L1 extends List, L2 extends List> = [...L1, ...L2]

const concat = <A extends List, B extends List>(a: A, b: B) =>
  [...a, ...b] as Concat<A, B>

export { concat }

import { List } from "../type-utils"
import { Uniq } from "./uniq"

export type Union<L extends List, R extends List> = Uniq<[...L, ...R]>

const union = <T extends List, U extends List>(a: T, b: U) =>
  [...new Set([...a, ...b])] as Union<T, U>

export { union }

import { Dec } from "./type-utils"

type DropRight<T extends readonly unknown[], K extends number> = K extends 0
  ? T
  : T extends readonly [...infer Rest, unknown]
  ? DropRight<Rest, Dec<K>>
  : T

const dropRight = <T extends readonly unknown[], K extends number>(
  a: T,
  k: K,
) => {
  if (a.length <= k) return [] as unknown as DropRight<T, K>
  return a.slice(0, a.length - k) as unknown as DropRight<T, K>
}

const ar = [1, 2, 3, 4, 5, 6, 7] as const

const val = dropRight(ar, 2)

export { dropRight }

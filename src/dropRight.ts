import { Dec, TooLong } from "./type-utils"

type DropRight<T extends readonly unknown[], K extends number> = K extends 0
  ? T
  : T extends readonly [...infer Rest, unknown]
  ? DropRight<Rest, Dec<K>>
  : T

type SaveDropRight<
  T extends readonly unknown[],
  K extends number = 1,
> = TooLong<T> extends false ? DropRight<T, K> : T[]

const dropRight = <T extends readonly unknown[], K extends number>(
  a: T,
  k: K,
) => {
  if (a.length <= k) return [] as unknown as SaveDropRight<T, K>
  return a.slice(0, a.length - k) as unknown as SaveDropRight<T, K>
}

export { dropRight }

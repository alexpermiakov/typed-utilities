import { Dec, TooLong } from "./type-utils"

type Drop<T extends readonly unknown[], K extends number = 1> = K extends 0
  ? T
  : T extends readonly [unknown, ...infer Rest]
  ? Drop<Rest, Dec<K>>
  : T

type SaveDrop<
  T extends readonly unknown[],
  K extends number = 1,
> = TooLong<T> extends false ? Drop<T, K> : T[]

const drop = <T extends readonly unknown[], K extends number>(a: T, k: K) => {
  if (a.length <= k) return [] as unknown as SaveDrop<T, K>
  return a.slice(k) as unknown as SaveDrop<T, K>
}

export { drop }

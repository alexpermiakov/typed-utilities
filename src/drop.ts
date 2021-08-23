import { Dec } from "./type-utils"

type Drop<T extends readonly unknown[], K extends number = 1> = K extends 0
  ? T
  : T extends readonly [unknown, ...infer Rest]
  ? Drop<Rest, Dec<K>>
  : T

const drop = <T extends readonly unknown[], K extends number>(a: T, k: K) => {
  if (a.length <= k) return [] as unknown as Drop<T, K>
  return a.slice(k) as unknown as Drop<T, K>
}

const ar = [1, 2, 3, 4, 5, 6, 7] as const

const val = drop(ar, 4)

export { drop }

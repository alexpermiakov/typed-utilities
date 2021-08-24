import { TooLong } from "./type-utils"

type Reverse<T extends readonly unknown[]> = T extends readonly [
  infer Head,
  ...infer Tail
]
  ? [...Reverse<Tail>, Head]
  : T

type SaveReverse<T extends readonly unknown[]> = TooLong<T> extends true
  ? T[number][]
  : Reverse<T>

const reverse = <T extends readonly unknown[]>(ar: T) =>
  [...ar].reverse() as SaveReverse<T>

export { reverse }

type Reverse<T> = T extends readonly [infer Head, ...infer Tail]
  ? [...Reverse<Tail>, Head]
  : T

const reverse = <T extends readonly unknown[]>(ar: T) =>
  [...ar].reverse() as unknown as Reverse<T>

const r = reverse([1, 2, 3] as const)

export { reverse }

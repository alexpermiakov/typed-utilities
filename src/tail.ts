type Tail<T extends readonly unknown[]> = T extends readonly [
  unknown,
  ...infer V
]
  ? V
  : undefined

const tail = <T extends readonly unknown[]>(ar: T) => ar.slice(1) as Tail<T>

const t = tail([1, 2, 3] as const)

export { tail }

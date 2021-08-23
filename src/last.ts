type Last<T extends readonly unknown[]> = T extends readonly [
  ...unknown[],
  infer V,
]
  ? V
  : undefined

const last = <T extends readonly unknown[]>(ar: T) => ar[ar.length - 1] as Last<T>

const l = last([1, 2, 3, 4, 5] as const)

export { last }

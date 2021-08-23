type Init<T extends readonly unknown[]> = T extends readonly [
  ...infer V,
  unknown,
]
  ? V
  : never

const init = <T extends readonly unknown[]>(a: T) => a.slice(0, -1) as Init<T>

const i = init([1, 2, 3, 4] as const)

export { init }

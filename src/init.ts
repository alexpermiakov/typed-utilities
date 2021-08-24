type Init<T extends readonly unknown[]> = T extends readonly [
  ...infer V,
  unknown,
]
  ? V
  : never

const init = <T extends readonly unknown[]>(a: T) => a.slice(0, -1) as Init<T>

export { init }

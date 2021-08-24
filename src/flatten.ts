type Flatten<T extends readonly unknown[]> = T extends readonly [
  infer V,
  ...infer Rest
]
  ? V extends readonly unknown[]
    ? [...Flatten<V>, ...Flatten<Rest>]
    : [V, ...Flatten<Rest>]
  : []

const flatten = <T extends readonly unknown[]>(a: T) => a.flat() as Flatten<T>

export { flatten }

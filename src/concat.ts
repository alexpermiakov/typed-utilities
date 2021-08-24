type Concat<A extends readonly unknown[], B extends readonly unknown[]> = [
  ...A,
  ...B
]

const concat = <A extends readonly unknown[], B extends readonly unknown[]>(
  a: A,
  b: B,
) => [...a, ...b] as Concat<A, B>

export { concat }

type Concat<A extends readonly unknown[], B extends readonly unknown[]> = [
  ...A,
  ...B
]

const concat = <A extends readonly unknown[], B extends readonly unknown[]>(
  a: A,
  b: B,
) => [...a, ...b] as Concat<A, B>

const a = [1, 2, 3] as const
const b = [4, 5, 6] as const

const val = concat(a, b)

// if (val.length === 10) {
//   console.log("dead code")
// }

export { concat }

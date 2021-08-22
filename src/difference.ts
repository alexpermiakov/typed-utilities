export type Difference<
  L extends readonly unknown[],
  R extends readonly unknown[],
> = L extends readonly [infer V, ...infer Rest]
  ? V extends R[number]
    ? Difference<Rest, R>
    : [V, ...Difference<Rest, R>]
  : []

function difference<T extends readonly unknown[], U extends readonly unknown[]>(
  a: T,
  b: U,
) {
  return a.filter((x) => !b.includes(x)) as Difference<T, U>
}

const ar1 = [1, 2, 3, 4, 9] as const
const ar2 = [7, 6, 5, 4, 3] as const

const diffRes = difference(ar1, ar2)

// if (diffRes[0] == 7) {
//   console.log("dead code")
// }

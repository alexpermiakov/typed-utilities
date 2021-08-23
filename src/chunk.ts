import { Take } from "./take"

type Chunk<
  T extends readonly unknown[],
  K extends number,
  P extends unknown[] = Take<T, K>,
> = T extends readonly [...P, ...infer R]
  ? P extends []
    ? []
    : [P, ...Chunk<R, K>]
  : []

const chunk = <T extends readonly unknown[], K extends number>(a: T, k: K) => {
  const res = []
  for (let i = 0, n = a.length; i < n; i += k) {
    let chunk = a.slice(i, i + k)
    res.push(chunk)
  }
  return res as Chunk<T, K>
}

const vals = [1, 2, 3, 4, 5, 6, 7] as const

const p1 = chunk(vals, 2)

export { chunk }

export type Take<
  T extends readonly unknown[],
  K extends number = 1,
  R extends unknown[] = [],
> = K extends R["length"]
  ? R
  : T extends readonly [infer V, ...infer Rest]
  ? Take<Rest, K, [...R, V]>
  : R

const take = <T extends readonly unknown[], K extends number = 1>(a: T, k: K) =>
  a.slice(0, k) as Take<T, K>

export { take }

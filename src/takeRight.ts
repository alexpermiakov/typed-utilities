type TakeRight<
  T extends readonly unknown[],
  K extends number = 1,
  R extends unknown[] = [],
> = K extends R["length"]
  ? R
  : T extends readonly [...infer Rest, infer V]
  ? TakeRight<Rest, K, [V, ...R]>
  : R

const takeRight = <T extends readonly unknown[], K extends number = 1>(
  a: T,
  k: K,
) => a.slice(0, k) as TakeRight<T, K>

const tr = takeRight([1, 2, 3, 4, 5, 6] as const, 4)

export { takeRight }

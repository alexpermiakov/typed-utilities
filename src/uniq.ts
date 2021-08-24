export type Uniq<T extends readonly unknown[]> = T

const uniq = <T extends readonly unknown[]>(ar: T) =>
  [...new Set(ar)] as unknown as Uniq<T>

export { uniq }

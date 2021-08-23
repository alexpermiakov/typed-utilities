type Head<T> = T extends readonly unknown[] ? T[0] : undefined

const head = <T extends readonly unknown[]>(ar: T) => ar[0] as Head<T>

const h = head([1, 2, 3] as const)

export { head }

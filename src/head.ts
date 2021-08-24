type Head<T> = T extends readonly unknown[] ? T[0] : undefined

const head = <T extends readonly unknown[]>(ar: T) => ar[0] as Head<T>

export { head }

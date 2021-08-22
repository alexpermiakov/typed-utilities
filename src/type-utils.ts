export type Count<T, S extends number[] = []> = T extends S["length"]
  ? S
  : Count<T, [...S, 0]>

export type Dec<T> = Count<T> extends [unknown, ...infer Tail]
  ? Tail["length"]
  : 0

export type Falsy = null | 0 | undefined | false | ""

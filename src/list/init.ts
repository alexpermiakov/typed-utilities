import { List } from "../type-utils"

export type Init<T extends List> = T extends readonly [...infer V, unknown]
  ? V
  : never

const init = <T extends List>(a: T) => a.slice(0, -1) as Init<T>

export { init }

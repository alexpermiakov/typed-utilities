import { List } from "../type-utils"

export type Init<L extends List> = L extends readonly [...infer V, unknown]
  ? V
  : never

const init = <L extends List>(a: L) => a.slice(0, -1) as Init<L>

export { init }

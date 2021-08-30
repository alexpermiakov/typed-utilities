import { List } from "../type-utils"

type Zip2<
  T1 extends List,
  T2 extends List,
  R extends unknown[] = [],
> = T1 extends [infer V1, ...infer Rest1]
  ? T2 extends [infer V2, ...infer Rest2]
    ? Zip2<Rest1, Rest2, [...R, [V1, V2]]>
    : R
  : R

type Z = Zip2<[1, 2, 3, 4], [10, 20, 30, 40]>

const zip = <T extends List[]>(...arrays: T) =>
  arrays[0].map((_, i) => arrays.map((array) => array[i]))

export { zip }


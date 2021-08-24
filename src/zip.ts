type Zip<T extends readonly unknown[][]> = T

type Z = Zip<[[1, 2, 3], [11, 12, 13], [100, 110, 120]]>

const zip = <T extends readonly unknown[][]>(...arrays: T) =>
  arrays[0].map((_, i) => arrays.map((array) => array[i])) as unknown as Zip<T>

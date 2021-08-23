type Trim<T extends string> = T extends ` ${infer R}`
  ? Trim<R>
  : T extends `${infer L} `
  ? Trim<L>
  : T

const trim = <V extends string>(str: V): Trim<V> => str.trim()

const str = "  Hello world!  "
const trimmedStr = trim(str)

export { trim }

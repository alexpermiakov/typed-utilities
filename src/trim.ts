type Trim<T extends string> = T extends ` ${infer R}`
  ? Trim<R>
  : T extends `${infer L} `
  ? Trim<L>
  : T

function trim<V extends string>(str: V): Trim<V> {
  return str.trim()
}

const str = "  Hello world!  "
const trimmedStr = trim(str)

if (trimmedStr[0] === " ") {
  console.log("dead code")
}

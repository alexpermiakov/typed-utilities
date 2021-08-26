export type Overwrite<O1 extends object, O2 extends object> = {
  [K in keyof O1]: K extends keyof O2 ? O2[K] : O1[K]
}

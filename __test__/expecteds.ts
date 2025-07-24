export const expected1 = `import { Type, Static } from '@sinclair/typebox'

export type Foo = Static<typeof Foo>
export const Foo = Type.Object({
  name: Type.String(),
  age: Type.Number()
})

export type Root = Static<typeof Root>
export const Root = Type.Object({
  a: Type.Number(),
  b: Type.String(),
  foo: Type.Array(Foo)
})`;

export const expected2 = `import { Type, Static } from '@sinclair/typebox'

export type RootElement = Static<typeof RootElement>
export const RootElement = Type.Object({
  a: Type.Number(),
  b: Type.String()
})

export type Root = Static<typeof Root>
export const Root = Type.Array(RootElement)`;


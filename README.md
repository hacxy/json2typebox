# Json2Typebox

## Overview

Json2Typebox is a code generation tool that transforms Json Data into TypeScript types and TypeBox type.

targets browsers and Node.js .

## Install

```bash
npm install json2typebox --save
```

## Json to typebox

function: `json2typebox()`

> **json2typebox**(`json`, `name`): `Promise`\<`string`\>

### Params

| name   | types    | default     | description      |
| :----- | :------- | :---------- | :--------------- |
| `json` | `string` | `undefined` | json data        |
| `name` | `string` | `'Root'`    | define type name |

### Returns

`Promise`\<`string`\>

### Example

```ts
import json2typebox from 'json2typebox';

json2typebox(`{"id": 1, "name": "hacxy"}`, 'Root').then((code) => {
  console.log(code);
  /*
    import { Type, Static } from '@sinclair/typebox'

    export type Data = Static<typeof Data>
    export const Data = Type.Object({
      id: Type.Number(),
      name: Type.String()
    })
 */
});
```

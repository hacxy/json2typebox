# Json2Typebox

If you need cli tools. see [json2typebox-cli](https://github.com/hacxy/json2typebox-cli).

## Overview

Json2Typebox is a code generation tool that transforms Json Data into [TypeBox](https://github.com/sinclairzx81/typebox) type.

Browsers and Node.js can both be used.

## Install

```bash
npm install json2typebox --save
```

### Example

```ts
import json2typebox from 'json2typebox';

await json2typebox('{"id": 1, "name": "hacxy"}', 'Root');

/*
    import { Type, Static } from '@sinclair/typebox'

    export type Data = Static<typeof Data>
    export const Data = Type.Object({
      id: Type.Number(),
      name: Type.String()
    })
 */
```

function: `json2typebox()`

> **json2typebox**(`json`, `name`): `Promise`\<`string`\>

### Params

| name   | types    | default     | description      |
| :----- | :------- | :---------- | :--------------- |
| `json` | `string` | `undefined` | json data        |
| `name` | `string` | `'Root'`    | define type name |

### Returns

`Promise`\<`string`\>

## Related

- json2typebox-cli: [https://github.com/hacxy/json2typebox-cli](https://github.com/hacxy/json2typebox-cli)
- json2ts: [https://github.com/hacxy/json2ts](https://github.com/hacxy/json2ts)

## License

MIT

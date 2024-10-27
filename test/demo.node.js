import { json2typebox } from '../dist/index.js';

json2typebox(`[{"id":1}]`).then((res) => {
  console.log(res);
});

import { json2Typebox } from '../dist/index.js';

json2Typebox(`[{"id":1}]`).then((res) => {
  console.log(res);
});

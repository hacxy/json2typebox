import json2typebox from '../dist/index.js';

json2typebox(`{"id": 1, "name": "hacxy"}`).then((res) => {
  console.log(res);
});

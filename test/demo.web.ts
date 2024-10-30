import json2typescript from '../dist/index';

json2typescript(`[{"id": 1}]`).then((res) => {
  console.log(res);
});

import { expect, it } from 'vitest';
import json2typebox from '../src/index.ts';
import { expected1, expected2 } from './expecteds.ts';
import { input1, input2 } from './inputs.ts';

it('json2typebox', async () => {
  const value = await json2typebox(input1);
  expect(value).toEqual(expected1);

  const value2 = await json2typebox(input2);
  expect(value2).toEqual(expected2);
});

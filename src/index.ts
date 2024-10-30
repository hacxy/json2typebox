import { TypeScriptToTypeBox, Formatter } from '@sinclair/typebox-codegen';
import json2ts from '@hacxy/json2ts';
/**
 * Json to typebox
 */
export const json2typebox = async (json: string, name: string = 'Root') => {
  let tsCode = '';
  try {
    tsCode = await json2ts(json, name);
  } catch (err) {
    throw new Error(String(err));
  }
  const code = TypeScriptToTypeBox.Generate(tsCode);
  const finalCode = Formatter.Format(code);
  return finalCode;
};

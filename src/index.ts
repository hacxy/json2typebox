import json2ts from '@hacxy/json2ts';
import { Formatter, TypeScriptToTypeBox } from '@sinclair/typebox-codegen';
/**
 * Json to typebox
 */
async function json2typebox(json: string, name: string = 'Root') {
  let tsCode = '';
  try {
    tsCode = await json2ts(json, name);
  }
  catch (err) {
    throw new Error(String(err));
  }
  const code = TypeScriptToTypeBox.Generate(tsCode);
  const finalCode = Formatter.Format(code);
  return finalCode.trim();
}

export default json2typebox;

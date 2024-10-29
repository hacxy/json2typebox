import { TypeScriptToTypeBox, Formatter } from '@sinclair/typebox-codegen';
import { InputData, jsonInputForTargetLanguage, quicktype } from 'quicktype-core';
/**
 * json to typescript
 */
export const json2typescript = async (json: string, name: string = 'Data') => {
  let isArray = false;

  try {
    isArray = Array.isArray(JSON.parse(json));
  } catch (err) {
    throw new Error(String(err));
  }

  const jsonInput = jsonInputForTargetLanguage('typescript');
  await jsonInput.addSource({
    name: isArray ? `${name}Element` : name,
    samples: [json]
  });

  const inputData = new InputData();
  inputData.addInput(jsonInput);
  const { lines } = await quicktype({
    inputData,
    lang: 'typescript',
    rendererOptions: {
      'just-types': true
    },
    indentation: '  '
  });

  let tsCode = lines.join('\n');

  if (isArray) {
    tsCode = tsCode + `\nexport type ${name} = ${name}Element[];`;
  }
  return tsCode;
};

/**
 * json to typebox
 */
export const json2typebox = async (json: string, name: string = 'Data') => {
  let tsCode = '';
  try {
    tsCode = await json2typescript(json, name);
  } catch (err) {
    throw new Error(String(err));
  }
  const code = TypeScriptToTypeBox.Generate(tsCode);
  const finalCode = Formatter.Format(code);
  return finalCode;
};

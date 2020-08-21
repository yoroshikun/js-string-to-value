import { ValueType } from '../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let value: any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getValue = (jsString: string, type: ValueType): any => {
  if (type === 'object' || type === 'array' || type === 'function') {
    new Function(`value = ${jsString}`)();

    return value;
  }

  if (type === 'boolean') {
    return jsString === 'true';
  }

  if (type === 'undefined') {
    return undefined;
  }

  if (type === 'null') {
    return null;
  }

  if (type === 'string') {
    return jsString.slice(1, jsString.length - 1);
  }

  if (type === 'number') {
    return Number(jsString);
  }

  if (type === 'unknown') {
    return jsString;
  }
};

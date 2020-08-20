import { guessValueType, validateValueType } from './utils/validators';
import { getValue } from './utils/getValue';
import { ValueType } from './types';

/**
 * Parse JsValue string to actual JsValue
 * Can be given type with `parseJs<T>(jsString)`
 *
 * @param jsString String - JsValue string to parse
 *
 * @returns <T> Parsed Object
 */
export const parseJs = <T>(jsString: string, type?: ValueType): T => {
  if (type) {
    if (!validateValueType(jsString, type)) {
      throw new Error(
        'Given type does not seem to match validated type, please pass the correct type or use unsafeParseJs',
      );
    }
  }

  const valueType = type || guessValueType(jsString);

  if (valueType === 'unknown') {
    throw new Error(
      'The ValueType could not be guessed or validated, and or is not given, please double check the jsString or use unsafeParseJs',
    );
  }

  const value = getValue(jsString, valueType);

  return value;
};

/**
 * unsafe Parse JsValue string to actual JsValue
 * Can be given type with `parseJs<T>(jsString)`
 *
 * @param jsString: String - JsValue string to parse
 *
 * @returns <T> Parsed Object
 */
export const unsafeParseJs = <T>(jsString: string, type?: ValueType): T => {
  const valueType = type || guessValueType(jsString);

  const value = getValue(jsString, valueType);

  return value;
};

/**
 * Return JSON of JsValue string
 *
 * @param jsString String -JsValue string to parse
 *
 * @returns Stringified JSON
 */
export const unsafeJSON = (jsString: string, type?: ValueType): string => {
  const valueType = type || guessValueType(jsString);

  const value = getValue(jsString, valueType);

  return JSON.stringify(value);
};

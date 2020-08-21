import { ValueType } from '../types';

/**
 * Simple check if string looks like it is an object
 *
 * @param jsString String - JsValue string to validate
 *
 * @returns Boolean - string looks like an javascript Object value
 */
export const isObject = (jsString: string): boolean => {
  return jsString[0] === '{' && jsString[jsString.length - 1] === '}';
};

/**
 * Simple check if string looks like it is an array
 *
 * @param jsString String - JsValue string to validate
 *
 * @returns Boolean - string looks like an javascript Array value
 */
export const isArray = (jsString: string): boolean => {
  return jsString[0] === '[' && jsString[jsString.length - 1] === ']';
};

/**
 * Simple check if string looks like it is a Boolean
 *
 * @param jsString String - JsValue string to validate
 *
 * @returns Boolean - string looks like an javascript Boolean value
 */
export const isBoolean = (jsString: string): boolean => {
  return jsString === 'true' || jsString === 'false';
};

/**
 * Simple check if string looks like it is undefined (Why?)
 *
 * @param jsString String - JsValue string to validate
 *
 * @returns Boolean - string looks like an javascript undefined value
 */
export const isUndefined = (jsString: string): boolean => {
  return jsString === 'undefined' || jsString === '';
};

/**
 * Simple check if string looks like it is null
 *
 * @param jsString String - JsValue string to validate
 *
 * @returns Boolean - string looks like an javascript null
 */
export const isNull = (jsString: string): boolean => {
  return jsString === 'null';
};

/**
 * Simple check if string looks like it is a string
 *
 * @param jsString String - JsValue string to validate
 *
 * @returns Boolean - string looks like an javascript string
 */
export const isString = (jsString: string): boolean => {
  return (
    (jsString[0] === '`' && jsString[jsString.length - 1] === '`') ||
    (jsString[0] === "'" && jsString[jsString.length - 1] === "'") ||
    (jsString[0] === '"' && jsString[jsString.length - 1] === '"')
  );
};

/**
 * Simple check if string looks like it is a number
 *
 * @param jsString String - JsValue string to validate
 *
 * @returns Boolean - string looks like an javascript number
 */
export const isNumber = (jsString: string): boolean => {
  return !isNaN(Number(jsString));
};

/**
 * Simple check if string looks like it is a function
 *
 * @param jsString String - JsValue string to validate
 *
 * @returns Boolean - string looks like an javascript function
 */
export const isFunction = (jsString: string): boolean => {
  return (
    (jsString[0] === 'f' &&
      jsString.includes('function') &&
      jsString[jsString.length - 1] === '}') ||
    (jsString[0] === '(' &&
      jsString.includes('=>') &&
      jsString[jsString.length - 1] === '}')
  );
};

/**
 * Using simple checks guess what value type the provided string is
 *
 * @param jsString String - JsValue string to validate
 *
 * @returns String - what value type guessed
 */
export const guessValueType = (jsString: string): ValueType => {
  if (isObject(jsString)) return 'object';
  if (isArray(jsString)) return 'array';
  if (isBoolean(jsString)) return 'boolean';
  if (isUndefined(jsString)) return 'undefined';
  if (isNull(jsString)) return 'null';
  if (isString(jsString)) return 'string';
  if (isNumber(jsString)) return 'number';
  if (isFunction(jsString)) return 'function';

  return 'unknown';
};

/**
 * Validates given ValueType with simple checks
 *
 * @param jsString String - JsValue string to validate
 *
 * @returns Boolean - if given type matches checked type
 */
export const validateValueType = (
  jsString: string,
  type: ValueType,
): boolean => {
  if (type === 'object') return isObject(jsString);
  if (type === 'array') return isArray(jsString);
  if (type === 'boolean') return isBoolean(jsString);
  if (type === 'undefined') return isUndefined(jsString);
  if (type === 'null') return isNull(jsString);
  if (type === 'string') return isString(jsString);
  if (type === 'number') return isNumber(jsString);
  if (type === 'function') return isFunction(jsString);

  return false;
};

import { isObject } from "./utils/validators";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let value: any;

/**
 * Parse JsValue string to actual JsValue
 * Can be given type with `parseJs<T>(jsString)`
 *
 * @param jsString String - JsValue string to parse
 *
 * @returns <T> Parsed Object
 */
export const parseJs = <T>(jsString: string): T => {
  if (!isObject(jsString)) {
    throw new Error("String is not an valid value");
  }

  new Function(`value = ${jsString}`)();

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
export const unsafeParseJs = <T>(jsString: string): T => {
  new Function(`value = ${jsString}`)();

  return value;
};

/**
 * Return JSON of JsValue string
 *
 * @param jsString String -JsValue string to parse
 *
 * @returns Stringified JSON
 */
export const unsafejson = (jsString: string): string => {
  new Function(`value = ${jsString}`)();

  return JSON.stringify(value);
};

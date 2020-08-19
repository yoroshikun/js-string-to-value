export const isObject = (jsString: string): boolean => {
  return jsString[0] === "{" && jsString[jsString.length - 1] === "}";
};

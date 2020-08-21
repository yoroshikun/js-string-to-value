import { parseJs, unsafeParseJs, unsafeJSON } from '..';

test('Guess Null', () => {
  expect(parseJs<null>('null')).toBe(null);
});

test('Null Type Given', () => {
  expect(parseJs<null>('null', 'null')).toBe(null);
});

test('Null Incorrect Type Given', () => {
  expect(() => {
    parseJs<null>('null', 'object');
  }).toThrow(Error);
});

test('Null Incorrect Type Given Unsafe', () => {
  expect(unsafeParseJs<null>('null', 'undefined')).toBe(undefined);
});

test('Null Type Given Unsafe', () => {
  expect(unsafeParseJs<null>('null', 'null')).toBe(null);
});

test('Null Guess Unsafe', () => {
  expect(unsafeParseJs<null>('null')).toBe(null);
});

test('Null to JSON', () => {
  expect(unsafeJSON('null')).toBe(JSON.stringify(null));
});

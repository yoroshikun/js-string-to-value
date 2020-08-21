import { parseJs, unsafeParseJs, unsafeJSON } from '..';

test('Guess String', () => {
  expect(parseJs<string>('"hello world"')).toBe('hello world');
});

test('String Type Given', () => {
  expect(parseJs<string>('"hello world"', 'string')).toBe('hello world');
});

test('String Incorrect Type Given', () => {
  expect(() => {
    parseJs<string>('"hello world"', 'object');
  }).toThrow(Error);
});

test('String Incorrect Type Given Unsafe', () => {
  expect(unsafeParseJs<string>('"hello world"', 'null')).toBe(null);
});

test('String Type Given Unsafe', () => {
  expect(unsafeParseJs<string>('"hello world"', 'string')).toBe('hello world');
});

test('String Guess Unsafe', () => {
  expect(unsafeParseJs<string>('"hello world"')).toBe('hello world');
});

test('String to JSON', () => {
  expect(unsafeJSON('"hello world"')).toBe(JSON.stringify('hello world'));
});

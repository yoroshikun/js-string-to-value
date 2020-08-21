import { parseJs, unsafeParseJs, unsafeJSON } from '..';

test('Array Guess', () => {
  expect(parseJs<string[]>("['hello','world']")[1]).toBe('world');
});

test('Array Type Given', () => {
  expect(parseJs<string[]>("['hello','world']", 'array')[1]).toBe('world');
});

test('Array Incorrect Type Given', () => {
  expect(() => {
    parseJs<string[]>("['hello','world']", 'object');
  }).toThrow(Error);
});

test('Array Incorrect Type Given Unsafe', () => {
  expect(unsafeParseJs<string[]>("['hello','world']", 'null')).toBe(null);
});

test('Array Type Given Unsafe', () => {
  expect(unsafeParseJs<string[]>("['hello','world']", 'array')[1]).toBe(
    'world',
  );
});

test('Array Guess Unsafe', () => {
  expect(unsafeParseJs<string[]>("['hello','world']")[1]).toBe('world');
});

test('Array to JSON', () => {
  expect(unsafeJSON("['hello','world']")).toBe(
    JSON.stringify(['hello', 'world']),
  );
});

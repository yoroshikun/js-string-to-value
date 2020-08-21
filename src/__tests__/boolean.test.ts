import { parseJs, unsafeParseJs, unsafeJSON } from '..';

test('Guess Boolean', () => {
  expect(parseJs<boolean>('true')).toBe(true);
  expect(parseJs<boolean>('false')).toBe(false);
});

test('Boolean Type Given', () => {
  expect(parseJs<boolean>('true', 'boolean')).toBe(true);
  expect(parseJs<boolean>('false', 'boolean')).toBe(false);
});

test('Boolean Incorrect Type Given', () => {
  expect(() => {
    parseJs<boolean>('true', 'object');
  }).toThrow(Error);
  expect(() => {
    parseJs<boolean>('false', 'object');
  }).toThrow(Error);
});

test('Boolean Incorrect Type Given Unsafe', () => {
  expect(unsafeParseJs<boolean>('true', 'null')).toBe(null);
  expect(unsafeParseJs<boolean>('false', 'null')).toBe(null);
});

test('Boolean Type Given Unsafe', () => {
  expect(unsafeParseJs<boolean>('true', 'boolean')).toBe(true);
  expect(unsafeParseJs<boolean>('false', 'boolean')).toBe(false);
});

test('Boolean Guess Unsafe', () => {
  expect(unsafeParseJs<boolean>('true')).toBe(true);
  expect(unsafeParseJs<boolean>('false')).toBe(false);
});

test('Boolean to JSON', () => {
  expect(unsafeJSON('true')).toBe(JSON.stringify(true));
  expect(unsafeJSON('false')).toBe(JSON.stringify(false));
});

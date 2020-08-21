import { parseJs, unsafeParseJs, unsafeJSON } from '..';

test('Guess Unknown', () => {
  expect(() => {
    parseJs<unknown>('asdfghjkl');
  }).toThrow(Error);
});

test('Unknown Type Given', () => {
  expect(() => {
    parseJs<unknown>('asdfghjkl', 'unknown');
  }).toThrow(Error);
});

test('Unknown Incorrect Type Given', () => {
  expect(() => {
    parseJs<unknown>('asdfghjkl', 'object');
  }).toThrow(Error);
});

test('Unknown Incorrect Type Given Unsafe', () => {
  expect(unsafeParseJs<unknown>('asdfghjkl', 'null')).toBe(null);
});

test('Unknown Type Given Unsafe', () => {
  expect(unsafeParseJs<unknown>('asdfghjkl', 'unknown')).toBe('asdfghjkl');
});

test('Unknown Guess Unsafe', () => {
  expect(unsafeParseJs<unknown>('asdfghjkl')).toBe('asdfghjkl');
});

test('Unknown to JSON', () => {
  expect(unsafeJSON('asdfghjkl')).toBe(JSON.stringify('asdfghjkl'));
});

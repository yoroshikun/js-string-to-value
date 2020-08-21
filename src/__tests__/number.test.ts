import { parseJs, unsafeParseJs, unsafeJSON } from '..';

test('Guess Number', () => {
  expect(parseJs<number>('42')).toBe(42);
});

test('Number Type Given', () => {
  expect(parseJs<number>('42', 'number')).toBe(42);
});

test('Number Incorrect Type Given', () => {
  expect(() => {
    parseJs<number>('42', 'object');
  }).toThrow(Error);
});

test('Number Incorrect Type Given Unsafe', () => {
  expect(unsafeParseJs<number>('42', 'null')).toBe(null);
});

test('Number Type Given Unsafe', () => {
  expect(unsafeParseJs<number>('42', 'number')).toBe(42);
});

test('Number Guess Unsafe', () => {
  expect(unsafeParseJs<number>('42')).toBe(42);
});

test('Number to JSON', () => {
  expect(unsafeJSON('42')).toBe(JSON.stringify(42));
});

import { parseJs, unsafeParseJs, unsafeJSON } from '..';

test('Guess Undefined', () => {
  expect(parseJs<undefined>('')).toBe(undefined);
  expect(parseJs<undefined>('undefined')).toBe(undefined);
});

test('Undefined Type Given', () => {
  expect(parseJs<undefined>('', 'undefined')).toBe(undefined);
  expect(parseJs<undefined>('undefined', 'undefined')).toBe(undefined);
});

test('Undefined Incorrect Type Given', () => {
  expect(() => {
    parseJs<undefined>('', 'object');
  }).toThrow(Error);
  expect(() => {
    parseJs<undefined>('undefined', 'object');
  }).toThrow(Error);
});

test('Undefined Incorrect Type Given Unsafe', () => {
  expect(unsafeParseJs<undefined>('', 'null')).toBe(null);
  expect(unsafeParseJs<undefined>('undefined', 'null')).toBe(null);
});

test('Undefined Type Given Unsafe', () => {
  expect(unsafeParseJs<undefined>('', 'undefined')).toBe(undefined);
  expect(unsafeParseJs<undefined>('undefined', 'undefined')).toBe(undefined);
});

test('Undefined Guess Unsafe', () => {
  expect(unsafeParseJs<undefined>('')).toBe(undefined);
  expect(unsafeParseJs<undefined>('undefined')).toBe(undefined);
});

test('Undefined to JSON', () => {
  expect(unsafeJSON('')).toBe(JSON.stringify(undefined));
  expect(unsafeJSON('undefined')).toBe(JSON.stringify(undefined));
});

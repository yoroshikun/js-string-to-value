import { parseJs, unsafeParseJs, unsafeJSON } from '..';

test('Object Guess', () => {
  expect(parseJs<{ hello: string }>("{hello: 'world'}").hello).toBe('world');
});

test('Object Type Given', () => {
  expect(parseJs<{ hello: string }>("{hello: 'world'}", 'object').hello).toBe(
    'world',
  );
});

test('Object Incorrect Type Given', () => {
  expect(() => {
    parseJs<{ hello: string }>("{hello: 'world'}", 'array');
  }).toThrow(Error);
});

test('Object Incorrect Type Given Unsafe', () => {
  expect(unsafeParseJs<{ hello: string }>("{hello: 'world'}", 'null')).toBe(
    null,
  );
});

test('Object Type Given Unsafe', () => {
  expect(
    unsafeParseJs<{ hello: string }>("{hello: 'world'}", 'object').hello,
  ).toBe('world');
});

test('Object Guess Unsafe', () => {
  expect(unsafeParseJs<{ hello: string }>("{hello: 'world'}").hello).toBe(
    'world',
  );
});

test('Object to JSON', () => {
  expect(unsafeJSON("{hello: 'world'}")).toBe(
    JSON.stringify({ hello: 'world' }),
  );
});

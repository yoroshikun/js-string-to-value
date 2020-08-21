import { parseJs, unsafeParseJs } from '..';

test('Guess Function', () => {
  expect(parseJs<Function>("() => { return 'hello world'}")()).toBe(
    'hello world',
  );
});

test('Function Type Given', () => {
  expect(parseJs<Function>("() => { return 'hello world'}", 'function')()).toBe(
    'hello world',
  );
});

test('Function Incorrect Type Given', () => {
  expect(() => {
    parseJs<Function>("() => { return 'hello world'}", 'object')();
  }).toThrow(Error);
});

test('Function Incorrect Type Given Unsafe', () => {
  expect(unsafeParseJs<Function>("() => { return 'hello world'}", 'null')).toBe(
    null,
  );
});

test('Function Type Given Unsafe', () => {
  expect(
    unsafeParseJs<Function>("() => { return 'hello world'}", 'function')(),
  ).toBe('hello world');
});

test('Function Guess Unsafe', () => {
  expect(unsafeParseJs<Function>("() => { return 'hello world'}")()).toBe(
    'hello world',
  );
});

import { parseJs } from '..';

/* Object Tests */
test('Simple Object', () => {
  expect(parseJs<{ hello: string }>("{hello: 'world'}").hello).toBe('world');
});

test('Simple Object With Correct Type Given', () => {
  expect(parseJs<{ hello: string }>("{hello: 'world'}", 'object').hello).toBe(
    'world',
  );
});

test('Simple Object With Incorrect Type Given', () => {
  expect(() => {
    parseJs<{ hello: string }>("{hello: 'world'}", 'array');
  }).toThrow(Error);
});

/* Array Tests */

/* Boolean Tests */

/* Undefined Test */

/* Null Test */

/* String Tests */

/* Number Tests */

/* Function Tests */

/* Unknown Test */

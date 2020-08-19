import { parseJs } from '..';

test('General Test', () => {
  expect(parseJs<{ hello: string }>("{hello: 'world'}").hello).toBe('world');
});

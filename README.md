# JS String to Value

Typed Parsing of a string representation of a js value, if you absolutely must.

**Why**

Sometimes you are presented with a valid js represented as a string, this library aims to "safely" parse and type the js value without resorting to regex magic.

**Is this safe?**
Although this library does not use eval() see [This](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) for reasons it should never be used. It still uses `new Function` which under the wrong circumstances can still run malicious code. To avoid this the library attempts to be even more strict and verifies the strings you give it with valid data types.

> However if for some reason the parser is reporting the variable is not valid but is, you can still run `unsafeParseJs` which will skip validation (it may also be faster, however only use this if you know what and where your data is and is coming from)

### Example

```typescript
import { parseJs } from 'js-value';

const value = parseJs<{ test: string }>("{test: 'hello-world'}", "object");

console.log(value.test); // 'hello-world'
```

### Features

- Type safe parsing of a Javascript Value String with `parseJs` (Validation of possible values)
- Parse Javascript Value string directly to JSON `json` and `unsafeJSON`
- Unsafely try to parse a String with `unsafeParseJs` (Does not try to validate)

### Contributing

1. Fork this repository
2. Install and make changes

```bash
# Install dependencies
yarn install

# Make changes and run tests (create them if needed), lint and format
yarn test
yarn lint
yarn format
```

3. Make a pull request to this repository from your fork (master)

# brunfaick

A [Brainfuck](https://en.wikipedia.org/wiki/Brainfuck) interpreter implemented
in JavaScript.

## Install

```
$ npm install --save brunfaick
```


## Usage

```js
const brunfaick = require('brunfaick');

brunfaick('++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.');
//=> 'Hello World!'
```


## API

### brunfaick(program, input, middleware)

#### program

Type: `string`

A string of Brainfuck commands.

#### input

Type: `string`<br>
Default: `undefined`

Input provided to `program` during execution.

#### middleware

Type: `Function[]`<br>
Default: `undefined`

Middleware are functions used to extend `brunfaick`. They are intended for
experimental features like a realtime visualization of the Brainfuck runtime.

Each middleware is called at the beginning and end of every execution step.
Middleware are called in the order they are provided.

The middleware signature is `(state, tokens, tokenId) => state`.

`state`: the internal state of execution. `state` has four properties: `input`,
`output`, `tape`, and `pointer`.

`tokens`: the array of tokens being executed.

`tokenId`: the current token.

Each middleware has the option to read from and write to the current state of
execution before passing that modified state on to the next middleware. Modifying
`state` or `tokens` will alter the course of execution.


## CLI

```
$ npm install --global brunfaick
```

```
$ brunfaick --help
  Usage
    $ brunfaick [program]

  Options
    -i, --input
      Input provided to [program] during execution.

  Examples
    $ brunfaick '++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.'
      Hello World!
```


## License

MIT © [Max Hallinan](https://github.com/maxhallinan)

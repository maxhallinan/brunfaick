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

### brunfaick(program, input)

#### program

Type: `string`

A string of Brainfuck commands.

#### input

Type: `string`<br>
Default: `undefined`

Input provided to `program` during execution.



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

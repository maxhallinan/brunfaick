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
    -f, --file
      Path to a Brainfuck file.

    -i, --input
      Input provided to [program] during execution.

  Examples
    $ brunfaick '++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.'
      Hello World!

    $ brunfaick --file=hello-world.b
      Hello World!

    $ brunfaick --file=wc.b --input='foo bar baz'
      0 3 11
```


## License

MIT © [Max Hallinan](https://github.com/maxhallinan)

#!/usr/bin/env node
'use strict';

const fs = require('fs');
const meow = require('meow');
const brunfaick = require('.');

const help = `
  Usage
    $ brunfaick [program]

  Options
    -i, --input
      Input provided to [program] during execution.

    -f, --file
      Path to a Brainfuck file.

  Examples
    $ brunfaick '++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.'
      Hello World!

    $ brunfaick --file=hello-world.b
      Hello World!

    $ brunfaick --file=wc.b --input='foo bar baz'
      0 3 11
`;

const opts = {
  alias: {
    i: 'input',
    f: 'file',
  },
};

const cli = meow(help, opts);

const program = cli.input[0];
const input = cli.flags.input;
const file = cli.flags.file;

if (file) {
  fs.readFile(file, 'utf8', (err, program) => {
    const output = err ?
      err.message :
      brunfaick(program, input);

    console.log(output);
  });
} else {
  console.log(brunfaick(program, input));
}


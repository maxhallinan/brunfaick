#!/usr/bin/env node
'use strict';

const meow = require('meow');
const brainfuck = require('.');

const help = `
  Usage
    $ brainfuck-interpeter [program]

  Options
    -i, --input
      Input provided to [program] during execution.

  Examples
    $ brainfuck-interpreter ++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.
      Hello World!
`;

const opts = {
  alias: {
    i: 'input',
  },
};

const cli = meow(help, opts);

const program = cli.input[0];
const input = cli.flags.input;

console.log(brainfuck(program, input));

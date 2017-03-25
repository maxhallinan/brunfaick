#!/usr/bin/env node
'use strict';

const meow = require('meow');
const brunfaick = require('.');

const help = `
  Usage
    $ brunfaick [program]

  Options
    -i, --input
      Input provided to [program] during execution.

  Examples
    $ brunfaick ++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.
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

console.log(brunfaick(program, input));

#!/usr/bin/env node
'use strict';

const meow = require('meow');
const interpreter = require('.');

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
  }
};

const cli = meow(help, opts);

console.log(interpreter(cli.input[0], cli.flags));

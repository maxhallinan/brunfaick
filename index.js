'use strict';

const interpret = require('./interpreter');
const parse = require('./parser');

module.exports = (program, input = '') => {
  if (typeof program !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof program}`);
  }

  if (input && typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`);
  }

  return interpret(parse(program), input).output;
};


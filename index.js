'use strict';

const interpret = require('./interpreter');

module.exports = (program, input = '') => {
  if (typeof program !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof program}`);
  }

  if (input && typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`);
  }

  return interpret(program)(input);
};

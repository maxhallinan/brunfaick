'use strict';

const interpreter = require('./interpreter');
const parser = require('./parser');

module.exports = (program, input = '') => {
  if (typeof program !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof program}`);
  }

  if (input && typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`);
  }

  return interpreter(parser(program), input);
};

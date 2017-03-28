const { compose, } = require('../util');
const clean = require('./clean');
const lex = require('./lex');
const parse = require('./parse');

module.exports = compose(
  parse,
  compose(
    lex,
    clean
  )
);

const { compose, curry, } = require('../util');
const execute = require('./execute');
const initState = require('./init-state');
const output = require('./output');

module.exports = (tokens, input) => compose(
  output,
  curry(execute)(tokens),
  initState
)(input);

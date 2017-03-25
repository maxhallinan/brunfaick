const { compose, } = require('../util');
const execute = require('./execute');
const initState = require('./init-state');
const output = require('./output');

module.exports = (tokens, input) => {
  return compose(
    output,
    execute,
    initState,
  )(input);
};

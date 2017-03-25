const { compose, } = require('../util');
const initState = require('./init-state');
const output = require('./output');

module.exports = (tokens, input) => {
  return compose(
    output,
    initState,
  )(input);
};

const { compose, } = require('../util');
const execute = require('./execute');
const initState = require('./init-state');
const output = require('./output');

module.exports = (tokens, input) => compose(
  output,
  compose(
    state => execute(tokens, state),
    initState
  )
)(input);

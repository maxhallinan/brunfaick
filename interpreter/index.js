const execute = require('./execute');
const initState = require('./init-state');
const output = require('./output');

const compose = (a, b) => x => a(b(x));

module.exports = (tokens, input) => compose(
  output,
  compose(
    state => execute(tokens, state),
    initState
  )
)(input);

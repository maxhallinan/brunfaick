const execute = require('./execute');
const initState = require('./init-state');
const output = require('./output');

module.exports = function (tokens, input) {
  const state = initState(input);

  return output(execute(tokens, state));
};

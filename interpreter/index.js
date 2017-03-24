// const execute = require('./execute');
const initState = require('./init-state');
const output = require('./output');
const { compose, } = require('../util');

// const commands = require('./commands');
// const runLoop = curry(() => {});
// getNextState :: State -> Token -> State
// const getNextState = (lastState, token) => {
//   const { body, type, } = token;

//   if (type === 'LOOP') {
//     return runLoop();
//   }

//   return map(lastState, commands[type]);
// };

module.exports = (tokens, input) => {
  return compose(
    output,
    // curry(execute)(tokens),
    // init state with input value
    execute,
    initState,
  )(input);
};

const { compose, } = require('../util');
const initState = require('./init-state');
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

module.exports = compose(
  initState
);

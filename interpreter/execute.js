const { isNan, } = require('../util');
const commands = require('./commands');

const typeToCmd = {
  DECREMENT: commands.decrement,
  INCREMENT: commands.increment,
  INPUT: commands.input,
  LOOP: runLoop,
  MOVE_LEFT: commands.moveLeft,
  MOVE_RIGHT: commands.moveRight,
  OUTPUT: commands.output,
};

function getCounter(state) {
  const { pointer, tape, } = state;

  return tape[pointer];
}

function runLoop(state, body) {
  let counter = getCounter(state);

  while (counter > 0) {
    state = execute(body, state);

    counter = getCounter(state);
  }

  return state;
}

function getNextState(state, command) {
  const { body, type, } = command;

  state = typeToCmd[type](state, body);

  return state;
}

function validateNextState(state) {
  if (isNan(state.pointer) || state.pointer < 0) {
    throw new RangeError(
      'Your program used the < command one too many times in a row. ' +
      'There is no memory at cell -1.'
    );
  }

  return state;
}

function execute(tokens, state) {
  for (let i = 0, j = tokens.length; i < j; i++) {
    state = validateNextState(getNextState(state, tokens[i]));
  }

  return state;
}

module.exports = execute;

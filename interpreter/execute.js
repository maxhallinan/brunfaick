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

function execute(tokens, state) {
  return tokens.reduce(getNextState, state);
}

module.exports = execute;

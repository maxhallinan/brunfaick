const test = require('ava');
const { input, } = require('../../../interpreter/commands');
const initState = require('../../../interpreter/init-state');
const { deepClone, } = require('../../../util');

const initialState = initState('foo').fold();

test('Sets state.tape[pointer] to the charCode for input[0].', t => {
  const lastState = deepClone(initialState);

  const nextState = input(lastState);

  t.deepEqual(nextState.tape, [ 102, ]);
});

test('Removes the first character from state.input.', t => {
  const lastState = deepClone(initialState);

  const nextState = input(lastState);

  t.deepEqual(nextState.input, 'oo');
});

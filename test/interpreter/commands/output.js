const test = require('ava');
const { output, } = require('../../../interpreter/commands');
const initState = require('../../../interpreter/init-state');
const { deepClone, } = require('../../../util');

const initialState = initState('foo').fold();

test('Sets state.output to the char value of tape[pointer].', t => {
  const lastState = Object.assign(deepClone(initialState), {
    tape: [ 102, ],
  });

  const nextState = output(lastState);

  const expected = Object.assign(deepClone(lastState), {
    output: 'f',
  });

  t.deepEqual(nextState, expected);
});

const test = require('ava');
const { moveRight, } = require('../../../interpreter/commands');
const initState = require('../../../interpreter/init-state');
const { deepClone, } = require('../../../util');

const initialState = initState('foo').fold();

test('Sets state.pointer to one more than last value.', t => {
  const lastState = Object.assign(deepClone(initialState), {
    pointer: 2,
  });

  const nextState = moveRight(lastState);

  const expected = Object.assign(deepClone(lastState), {
    pointer: 3,
  });

  t.deepEqual(nextState, expected);
});

test('Throws Error if state.pointer is greater than 30000.', t => {
  const error = t.throws(() => {
    const lastState = Object.assign(deepClone(initialState), { pointer: 30000, });

    moveRight(lastState);
  }, Error);

  t.is(error.message, 'Your program has used the > command one too many times. There is a 30,000 cell memory limit.');
});

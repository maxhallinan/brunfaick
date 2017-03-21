const test = require('ava');
const { moveLeft, } = require('../../../interpreter/commands');
const initState = require('../../../interpreter/init-state');
const { deepClone, } = require('../../../util');

const initialState = initState('foo').fold();

test('Sets state.pointer to one less than last value.', t => {
  const lastState = Object.assign(deepClone(initialState), {
    pointer: 2,
  });

  const nextState = moveLeft(lastState);

  const expected = Object.assign(deepClone(lastState), {
    pointer: 1,
  });

  t.deepEqual(nextState, expected);
});

test('Throws RangeError if state.pointer is set to less than 0.', t => {
  const error = t.throws(() => {
    const lastState = deepClone(initialState);

    moveLeft(lastState);
  }, RangeError);

  t.is(error.message, 'Your program used the < command one too many times in a row. There is no memory at cell -1.');
});

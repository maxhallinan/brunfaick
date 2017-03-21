const test = require('ava');
const { increment, } = require('../../../interpreter/commands');
const initState = require('../../../interpreter/init-state');
const { deepClone, } = require('../../../util');

const initialState = initState('foo').fold();

test('Sets value of state.tape[pointer].', t => {
  const lastState = Object.assign(deepClone(initialState), {
    pointer: 2,
  });

  const nextState = increment(lastState);

  const expected = deepClone(lastState);
  expected.tape[expected.pointer] = 1;

  t.deepEqual(nextState, expected);
});

test('Sets state.tape[pointer] to one more than last value.', t => {
  const lastState = Object.assign(deepClone(initialState), {
    tape: [ 1, ],
  });

  const nextState = increment(lastState);

  const expected = Object.assign(deepClone(lastState), {
    tape: [ 2, ],
  });

  t.deepEqual(nextState, expected);
});

test('Sets state.tape[pointer] to 0 if last value is 255.', t => {
  const lastState = Object.assign(deepClone(initialState), {
    tape: [ 255, ],
  });

  const nextState = increment(lastState);

  const expected = Object.assign(deepClone(lastState), {
    tape: [ 0, ],
  });

  t.deepEqual(nextState, expected);
});

test('Sets state.tape[pointer] to 1 if last value is undefined.', t => {
  const lastState = deepClone(initialState);

  const nextState = increment(lastState);

  const expected = Object.assign(deepClone(lastState), {
    tape: [ 1, ],
  });

  t.deepEqual(nextState, expected);
});

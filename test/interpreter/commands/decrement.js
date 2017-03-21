const test = require('ava');
const { decrement, } = require('../../../interpreter/commands');
const initState = require('../../../interpreter/init-state');
const { deepClone, } = require('../../../util');

const initialState = initState('foo').fold();

test('Sets value of state.tape[pointer].', t => {
  const lastState = Object.assign(deepClone(initialState), {
    pointer: 2,
    foo: 'bar',
  });

  const nextState = decrement(lastState);

  const expected = deepClone(lastState);
  expected.tape[expected.pointer] = 255;

  t.deepEqual(nextState, expected);
});

test('Sets state.tape[pointer] to one less than last value.', t => {
  const lastState = Object.assign(deepClone(initialState), {
    tape: [ 1, ],
    foo: 'baz',
  });

  const nextState = decrement(lastState);

  const expected = Object.assign(deepClone(lastState), {
    tape: [ 0, ],
  });

  t.deepEqual(nextState, expected);
});

test('Sets state.tape[pointer] to 255 if last value is 0.', t => {
  const lastState = Object.assign(deepClone(initialState), {
    tape: [ 0, ],
  });

  const nextState = decrement(lastState);

  const expected = Object.assign(deepClone(lastState), {
    tape: [ 255, ],
  });

  t.deepEqual(nextState, expected);
});

test('Sets state.tape[pointer] to 255 if last value is undefined.', t => {
  const lastState = deepClone(initialState);

  const nextState = decrement(lastState);

  const expected = Object.assign(deepClone(lastState), {
    tape: [ 255, ],
  });

  t.deepEqual(nextState, expected);
});

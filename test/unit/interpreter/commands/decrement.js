const assert = require('assert');
const { decrement, } = require('../../../../interpreter/commands');
const initState = require('../../../../interpreter/init-state');
const { deepClone, } = require('../../../../util');

describe('unit > interpreter > commands > decrement', () => {
  let initialState;

  beforeEach(() => {
    initialState = initState('foo');
  });

  afterEach(() => {
    initialState = null;
  });

  it('Should set the value of state.tape[pointer].', () => {
    const lastState = Object.assign(deepClone(initialState), {
      pointer: 2,
      foo: 'bar',
    });

    const nextState = decrement(lastState);

    const expected = Object.assign(deepClone(initialState), {
      pointer: 2,
      foo: 'bar',
    });
    expected.tape[expected.pointer] = 255;

    assert.deepEqual(nextState, expected);
  });

  it('Should set state.tape[pointer] to one less than last value.', () => {
    const lastState = Object.assign(deepClone(initialState), {
      tape: [ 1, ],
      foo: 'baz',
    });

    const nextState = decrement(lastState);

    const expected = Object.assign(deepClone(lastState), {
      tape: [ 0, ],
    });

    assert.deepEqual(nextState, expected);
  });

  it('Should set state.tape[pointer] to 255 if last value is 0.', () => {
    const lastState = Object.assign(deepClone(initialState), {
      tape: [ 0, ],
    });

    const nextState = decrement(lastState);

    const expected = Object.assign(deepClone(lastState), {
      tape: [ 255, ],
    });

    assert.deepEqual(nextState, expected);
  });

  it('Should set state.tape[pointer] to 255 if last value is undefined.', () => {
    const lastState = deepClone(initialState);

    const nextState = decrement(lastState);

    const expected = Object.assign(deepClone(lastState), {
      tape: [ 255, ],
    });

    assert.deepEqual(nextState, expected);
  });
});


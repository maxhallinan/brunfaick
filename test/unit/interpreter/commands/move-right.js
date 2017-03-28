const assert = require('chai').assert;
const { moveRight, } = require('../../../../interpreter/commands');
const initState = require('../../../../interpreter/init-state');
const { deepClone, } = require('../../../../util');

describe('unit > interpreter > commands > move-right', () => {
  let initialState;

  beforeEach(() => {
    initialState = initState('foo');
  });

  afterEach(() => {
    initialState = null;
  });

  it('Should set state.pointer to one more than last value.', () => {
    const lastState = Object.assign(deepClone(initialState), {
      pointer: 2,
    });

    const nextState = moveRight(lastState);

    const expected = Object.assign(deepClone(lastState), {
      pointer: 3,
    });

    assert.deepEqual(nextState, expected);
  });

  it('Should throws Error if state.pointer is greater than 30000.', () => {
    const lastState = Object.assign(deepClone(initialState), { pointer: 30000, });

    assert.throws(
      () => moveRight(lastState),
      RangeError,
      /Your program has used the > command one too many times. There is a 30,000 cell memory limit./
    );
  });
});


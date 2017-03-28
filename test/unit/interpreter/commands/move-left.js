const assert = require('chai').assert;
const { moveLeft, } = require('../../../../interpreter/commands');
const initState = require('../../../../interpreter/init-state');

describe('unit > interpreter > commands > move-left', () => {
  it('Should set state.pointer to one less than last value.', () => {
    const lastState = Object.assign(initState(), {
      pointer: 2,
    });

    const nextState = moveLeft(lastState);

    const expected = Object.assign(initState(), {
      pointer: 1,
    });

    assert.deepEqual(nextState, expected);
  });

  it('Should throws RangeError if state.pointer is set to less than 0.', () => {
    assert.throws(
      () => moveLeft(initState()),
      RangeError,
      /Your program used the < command one too many times in a row. There is no memory at cell -1./
    );
  });
});

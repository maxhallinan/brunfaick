const assert = require('assert');
const { decrement, } = require('../../../../interpreter/commands');
const initState = require('../../../../interpreter/init-state');

describe('unit > interpreter > commands > decrement', () => {
  it('Should set the value of state.tape[pointer].', () => {
    const lastState = Object.assign(initState(), {
      pointer: 2,
    });

    const nextState = decrement(lastState);

    const expected = Object.assign(initState(), {
      pointer: 2,
    });
    expected.tape[expected.pointer] = 255;

    assert.deepEqual(nextState, expected);
  });

  it('Should set state.tape[pointer] to one less than last value.', () => {
    const lastState = Object.assign(initState(), {
      tape: [ 1, ],
    });

    const nextState = decrement(lastState);

    const expected = Object.assign(initState(), {
      tape: [ 0, ],
    });

    assert.deepEqual(nextState, expected);
  });

  it('Should set state.tape[pointer] to 255 if last value is 0.', () => {
    const lastState = Object.assign(initState(), {
      tape: [ 0, ],
    });

    const nextState = decrement(lastState);

    const expected = Object.assign(initState(), {
      tape: [ 255, ],
    });

    assert.deepEqual(nextState, expected);
  });

  it('Should set state.tape[pointer] to 255 if last value is undefined.', () => {
    const lastState = initState();

    const nextState = decrement(lastState);

    const expected = Object.assign(initState(), {
      tape: [ 255, ],
    });

    assert.deepEqual(nextState, expected);
  });
});


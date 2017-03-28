const assert = require('chai').assert;
const { increment, } = require('../../../../interpreter/commands');
const initState = require('../../../../interpreter/init-state');

describe('unit > interpreter > commands > increment', () => {
  it('Should set value of state.tape[pointer].', () => {
    const lastState = Object.assign(initState(), {
      pointer: 2,
    });

    const nextState = increment(lastState);

    const expected = Object.assign(initState(), {
      pointer: 2,
    });

    expected.tape[expected.pointer] = 1;

    assert.deepEqual(nextState, expected);
  });

  it('Should set state.tape[pointer] to one more than last value.', () => {
    const lastState = Object.assign(initState(), {
      tape: [ 1, ],
    });

    const nextState = increment(lastState);

    const expected = Object.assign(initState(), {
      tape: [ 2, ],
    });

    assert.deepEqual(nextState, expected);
  });

  it('Should set state.tape[pointer] to 0 if last value is 255.', () => {
    const lastState = Object.assign(initState(), {
      tape: [ 255, ],
    });

    const nextState = increment(lastState);

    const expected = Object.assign(initState(), {
      tape: [ 0, ],
    });

    assert.deepEqual(nextState, expected);
  });

  it('Should set state.tape[pointer] to 1 if last value is undefined.', () => {
    const lastState = initState();

    const nextState = increment(lastState);

    const expected = Object.assign(initState(), {
      tape: [ 1, ],
    });

    assert.deepEqual(nextState, expected);
  });
});


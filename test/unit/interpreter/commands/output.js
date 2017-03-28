const assert = require('chai').assert;
const { output, } = require('../../../../interpreter/commands');
const initState = require('../../../../interpreter/init-state');
const { deepClone, } = require('../../../../util');

describe('unit > interpreter > commands > output', () => {
  let initialState;

  beforeEach(() => {
    initialState = initState('foo').fold();
  });

  afterEach(() => {
    initialState = null;
  });

  it('Should sets state.output to the char value of tape[pointer].', () => {
    const lastState = Object.assign(deepClone(initialState), {
      tape: [ 102, ],
    });

    const nextState = output(lastState);

    const expected = Object.assign(deepClone(lastState), {
      output: 'f',
    });

    assert.deepEqual(nextState, expected);
  });
});

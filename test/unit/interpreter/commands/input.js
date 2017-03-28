const assert = require('chai').assert;
const { input, } = require('../../../../interpreter/commands');
const initState = require('../../../../interpreter/init-state');
const { deepClone, } = require('../../../../util');

describe('unit > interpreter > commands > input', () => {
  let initialState;

  beforeEach(() => {
    initialState = initState('foo').fold();
  });

  afterEach(() => {
    initialState = null;
  });

  it('Should set state.tape[pointer] to the charCode for input[0].', () => {
    const lastState = deepClone(initialState);

    const nextState = input(lastState);

    assert.deepEqual(nextState.tape, [ 102, ]);
  });

  it('Should remove the first character from state.input.', () => {
    const lastState = deepClone(initialState);

    const nextState = input(lastState);

    assert.deepEqual(nextState.input, 'oo');
  });
});


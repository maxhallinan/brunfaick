const assert = require('chai').assert;
const { input, } = require('../../../../interpreter/commands');
const initState = require('../../../../interpreter/init-state');

describe('unit > interpreter > commands > input', () => {
  let lastState;
  let nextState;

  beforeEach(() => {
    lastState = initState('foo');
    nextState = input(lastState);
  });

  afterEach(() => {
    lastState = null;
    nextState = null;
  });

  it('Should set state.tape[pointer] to the charCode for input[0].', () => {
    assert.deepEqual(nextState.tape, [ 102, ]);
  });

  it('Should remove the first character from state.input.', () => {
    assert.deepEqual(nextState.input, 'oo');
  });
});


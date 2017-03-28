const assert = require('chai').assert;
const { output, } = require('../../../../interpreter/commands');
const initState = require('../../../../interpreter/init-state');

describe('unit > interpreter > commands > output', () => {
  it('Should sets state.output to the char value of tape[pointer].', () => {
    const lastState = Object.assign(initState(), {
      tape: [ 102, ],
    });

    const nextState = output(lastState);

    const expected = Object.assign(initState(), {
      output: 'f',
      tape: [ 102, ],
    });

    assert.deepEqual(nextState, expected);
  });
});

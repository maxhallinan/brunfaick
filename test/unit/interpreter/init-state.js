const assert = require('chai').assert;
const initState = require('../../../interpreter/init-state');
const Container = require('../../../types/container');

describe('unit > interpreter > init-state', () => {
  it('Should instantiate the state tree with initial values.', () => {
    const input = 'foo';

    const initialState = initState(input).fold();

    const expected = {
      input,
      output: '',
      pointer: 0,
      tape: [],
    };

    assert.deepEqual(initialState, expected);
  });

  it('Should wrap the state tree in a Container type', () => {
    const input = 'foo';

    const initialState = initState(input);

    assert.instanceOf(initialState, Container);
  });
});


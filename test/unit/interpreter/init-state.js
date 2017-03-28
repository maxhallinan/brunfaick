const assert = require('chai').assert;
const initState = require('../../../interpreter/init-state');
const Container = require('../../../types/container');

describe('unit > interpreter > init-state', () => {
  let initialState;

  beforeEach(() => {
    const input = 'foo';

    initialState = initState(input).fold();
  });

  afterEach(() => {
    initialState = null;
  });

  it('Should instantiate the state tree with initial values.', () => {
    const expected = {
      input: 'foo',
      output: '',
      pointer: 0,
      tape: [],
    };

    assert.deepEqual(initialState, expected);
  });

  it('Should wrap the state tree in a Container type', () => {
    assert.instanceOf(initState(), Container);
  });
});


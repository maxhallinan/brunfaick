const assert = require('chai').assert;
const initState = require('../../../interpreter/init-state');

describe('unit > interpreter > init-state', () => {
  let initialState;

  beforeEach(() => {
    const input = 'foo';

    initialState = initState(input);
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
});


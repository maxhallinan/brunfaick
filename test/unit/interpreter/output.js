const assert = require('chai').assert;
const initState = require('../../../interpreter/init-state');
const output = require('../../../interpreter/output');

describe('unit > interpreter > output', () => {
  it('Should return state.output.', () => {
    const foo = 'foo';

    const state = initState().map(
      state => Object.assign({}, state, { output: foo, })
    );

    const result = output(state);

    assert.strictEqual(result, foo);
  });
});


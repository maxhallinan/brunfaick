const test = require('ava');
const initState = require('../../../interpreter/init-state');
const output = require('../../../interpreter/output');

test('Returns the output string', t => {
  const foo = 'foo';

  const state = initState().map(
    state => Object.assign({}, state, { output: foo, })
  );

  const result = output(state);

  t.is(result, foo);
});

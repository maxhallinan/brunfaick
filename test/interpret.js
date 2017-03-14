const test = require('ava');
const initState = require('../interpret/init-state');

test('interpret#initState', t => {
  const input = 'foo';
  const initialState = initState(input);

  const expected = {
    input: input,
    output: '',
    pointer: 0,
    tape: [],
  };

  t.deepEqual(initialState, expected);
});

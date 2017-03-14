const test = require('ava');
const initState = require('../interpreter/init-state');

test('interpreter#initState', t => {
  const input = 'foo';
  const initialState = initState(input);

  const expected = {
    input,
    output: '',
    pointer: 0,
    tape: [],
  };

  t.deepEqual(initialState, expected);
});

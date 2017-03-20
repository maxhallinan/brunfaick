const test = require('ava');
const initState = require('../../interpreter/init-state');

test('Instantiates state tree with initial values.', t => {
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

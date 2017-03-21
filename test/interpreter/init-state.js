const test = require('ava');
const initState = require('../../interpreter/init-state');
const Container = require('../../types/container');

test('Instantiates state tree with initial values.', t => {
  const input = 'foo';

  const initialState = initState(input).fold();

  const expected = {
    input,
    output: '',
    pointer: 0,
    tape: [],
  };

  t.deepEqual(initialState, expected);
});

test('Wraps state tree in a Container type', t => {
  const input = 'foo';

  const initialState = initState(input);

  t.truthy(initialState instanceof Container);
});

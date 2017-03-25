const test = require('ava');
const execute = require('../../interpreter/execute');
const initState = require('../../interpreter/init-state');

test('Reduces an abstract syntax tree to program state', t => {
  const ast = [
    { type: 'INCREMENT', },
    { type: 'INCREMENT', },
    { type: 'INCREMENT', },
    {
      type: 'LOOP',
      body: [
        { type: 'MOVE_RIGHT', },
        { type: 'INCREMENT', },
        { type: 'INCREMENT', },
        { type: 'INCREMENT', },
        {
          type: 'LOOP',
          body: [
            { type: 'MOVE_RIGHT', },
            { type: 'INCREMENT', },
            { type: 'INCREMENT', },
            {
              type: 'LOOP',
              body: [
                { type: 'MOVE_RIGHT', },
                { type: 'INCREMENT', },
                { type: 'INCREMENT', },
                { type: 'INCREMENT', },
                { type: 'INCREMENT', },
                { type: 'MOVE_LEFT', },
                { type: 'DECREMENT', },
              ],
            },
            { type: 'MOVE_LEFT', },
            { type: 'DECREMENT', },
          ],
        },
        { type: 'MOVE_LEFT', },
        { type: 'DECREMENT', },
      ],
    },
    { type: 'MOVE_RIGHT', },
    { type: 'MOVE_RIGHT', },
    { type: 'MOVE_RIGHT', },
    { type: 'OUTPUT', },
  ];

  const state = initState();

  const result = execute(ast, state);

  const expected = initState().map(state => ({
    ...state,
    output: 'H',
    pointer: 2,
    tape: [ 0, 0, 72 ],
  }));

  t.deepEqual(result, expected);
});

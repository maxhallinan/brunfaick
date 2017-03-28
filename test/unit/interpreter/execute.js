const assert = require('chai').assert;
const execute = require('../../../interpreter/execute');
const initState = require('../../../interpreter/init-state');

describe('unit > interpreter > execute', () => {
  it('Reduces an abstract syntax tree to program state.', () => {
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

    const expected = initState().map(state => Object.assign({}, state, {
      output: 'H',
      pointer: 3,
      tape: [ 0, 0, 0, 72, ],
    }));

    assert.deepEqual(result, expected);
  });
});


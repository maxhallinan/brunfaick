const assert = require('chai').assert;
const lex = require('../../../parser/lex');

describe('unit > parser > lex', () => {
  it('Should map Brainfuck commands to tokens.', () => {
    const cmdStr = '-+,[]<>.';

    const result = lex(cmdStr);

    const expected = [
      {
        type: 'DECREMENT',
      }, {
        type: 'INCREMENT',
      }, {
        type: 'INPUT',
      }, {
        type: 'LOOP_START',
      }, {
        type: 'LOOP_END',
      }, {
        type: 'MOVE_LEFT',
      }, {
        type: 'MOVE_RIGHT',
      }, {
        type: 'OUTPUT',
      },
    ];

    assert.deepEqual(result, expected);
  });
});

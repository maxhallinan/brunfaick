const test = require('ava');
const lex = require('../../parser/lex');

test('Maps Brainfuck command characters to tokens.', t => {
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

  t.deepEqual(result, expected);
});

const test = require('ava');
const parse = require('../../../parser/parse');

test('Converts a list of tokens to an abstract syntax tree', t => {
  // '+++[>+++[>++[>++++<-]<-]<-]>>>.'
  const tokens = [
    { type: 'INCREMENT', },
    { type: 'INCREMENT', },
    { type: 'INCREMENT', },
    { type: 'LOOP_START', },
    { type: 'MOVE_RIGHT', },
    { type: 'INCREMENT', },
    { type: 'INCREMENT', },
    { type: 'INCREMENT', },
    { type: 'LOOP_START', },
    { type: 'MOVE_RIGHT', },
    { type: 'INCREMENT', },
    { type: 'INCREMENT', },
    { type: 'LOOP_START', },
    { type: 'MOVE_RIGHT', },
    { type: 'INCREMENT', },
    { type: 'INCREMENT', },
    { type: 'INCREMENT', },
    { type: 'INCREMENT', },
    { type: 'MOVE_LEFT', },
    { type: 'DECREMENT', },
    { type: 'LOOP_END', },
    { type: 'MOVE_LEFT', },
    { type: 'DECREMENT', },
    { type: 'LOOP_END', },
    { type: 'MOVE_LEFT', },
    { type: 'DECREMENT', },
    { type: 'LOOP_END', },
    { type: 'MOVE_RIGHT', },
    { type: 'MOVE_RIGHT', },
    { type: 'MOVE_RIGHT', },
    { type: 'OUTPUT', },
  ];

  const expected = [
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

  const result = parse(tokens);

  t.deepEqual(result, expected);
});

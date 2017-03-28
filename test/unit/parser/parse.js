const assert = require('chai').assert;
const parse = require('../../../parser/parse');

describe('unit > parser > parse', () => {
  it('Should generate an abstract syntax tree from a list of tokens.', () => {
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

    assert.deepEqual(result, expected);
  });
});

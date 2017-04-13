const assert = require('chai').assert;
const parse = require('../../parser');

describe('unit > parser', () => {
  it('Maps commands to token types.', () => {
    const cmdStr = '+-<>[],.';

    const result = parse(cmdStr).map(({ type, }) => type);

    const expected = [ '+', '-', '<', '>', '[', ']', ',', '.', ];

    assert.deepEqual(result, expected);
  });

  it('Ignores non-Brainfuck characters.', () => {
    const cmdStr = '"A*$";?@![#>>+<<]>';

    const output = parse(cmdStr);

    assert.strictEqual(output.length, 8);
  });

  it('Assigns an end value to every [ token.', () => {
    const program = '+[--[[]]]';

    const ends = parse(program).filter(t => t.type === '[').map(({ end, }) => end);

    assert.deepEqual(ends, [ 8, 7, 6, ]);
  });

  it('Assigns a start value to every ] token.', () => {
    const program = '+[--[[]]]';

    const starts = parse(program).filter(t => t.type === ']').map(({ start, }) => start);

    assert.deepEqual(starts, [ 5, 4, 1, ]);
  });

  it('Records a line number for every token.', () => {
    const program = '< + \n[]\n-  -\n.';

    const lines = parse(program).map(({ line, }) => line);

    const expected = [ 1, 1, 2, 2, 3, 3, 4, ];

    assert.deepEqual(lines, expected);
  });

  it('Records a character number for every token.', () => {
    const program = '< + \n[]\n-  -\n.';

    const characters = parse(program).map(({ character, }) => character);

    const expected = [ 1, 3, 1, 2, 1, 4, 1, ];

    assert.deepEqual(characters, expected);
  });

  it('Throws a SyntaxError if unmatched brackets are found.', () => {
    assert.throws(
      () => {
        parse('+++++[>+++++++>++<<-]>.>.][');
      },
      SyntaxError,
      'An unmatched ] command was found at line 1, character 26.\n            You can\'t close a loop without opening one!'
    );

    assert.throws(
      () => {
        parse('+++++[>+++++++>++<<-]>.>.[');
      },
      SyntaxError,
      'An unmatched [ was found at line 1, character 26.\n      Don\'t forget to close your loops!'
    );
  });
});

const assert = require('chai').assert;
const brunfaick = require('../../.');

describe('end-to-end > reverse.b', () => {
  it('Should return the expected output', () => {
    const program = `
    [Revers, promyk.doleczek.pl]
    >+[[>],.----- ----- ---[+++++ +++++ +++[<]]>]
    <<[<]>[-]>[>]<
    [.<]
    `;

    const input = 'foo bar baz';

    const output = brunfaick(program, input);

    const expected = 'foo bar baz\u0000zab rab oof';

    assert.strictEqual(expected, output);
  });
});

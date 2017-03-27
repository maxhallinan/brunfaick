const assert = require('chai').assert;
const brunfaick = require('../../.');

describe('end-to-end > echo.b', () => {
  it('Should return the expected output.', () => {
    const program = `
    [Echo, promyk.doleczek.pl]
    >+[[>],.----- ----- ---[+++++ +++++ +++[<]]>]
    <<[<]>>
    [.>]
    `;

    const input = 'foo bar baz';

    const output = brunfaick(program, input);

    const expected = 'foo bar baz\u0000foo bar baz';

    assert.strictEqual(expected, output);
  });
});

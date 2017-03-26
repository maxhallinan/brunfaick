const test = require('ava');
const brunfaick = require('../../.');

test('Outputs the input string.', t => {
  const program = `
    [Echo, promyk.doleczek.pl]
    >+[[>],.----- ----- ---[+++++ +++++ +++[<]]>]
    <<[<]>>
    [.>]
  `;

  const input = 'foo bar baz';

  const result = brunfaick(program, input);

  const expected = 'foo bar baz\u0000foo bar baz';

  t.is(result, expected);
});


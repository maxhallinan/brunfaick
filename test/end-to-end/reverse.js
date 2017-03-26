const test = require('ava');
const brunfaick = require('../../.');

test('Outputs the input string reversed.', t => {
  const program = `
    [Revers, promyk.doleczek.pl]
    >+[[>],.----- ----- ---[+++++ +++++ +++[<]]>]
    <<[<]>[-]>[>]<
    [.<]
  `;

  const input = 'foo bar baz';

  const result = brunfaick(program, input);

  const expected = 'foo bar baz\u0000zab rab oof';

  t.is(result, expected);
});


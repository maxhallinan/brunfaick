const test = require('ava');
const brunfaick = require('../../.');

test('Outputs byte at cell 30000.', t => {
  const program = '++++[>++++++<-]>[>+++++>+++++++<<-]>>++++<[[>[[>>+<<-]<]>>>-]>-[>+>+<<-]>]+++++[>+++++++<<++>-]>.<<.';

  const result = brunfaick(program);

  const expected = '#';

  t.is(result, expected);
});

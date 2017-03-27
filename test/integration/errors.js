const test = require('ava');
const brunfaick = require('../../.');

test('Throws an Error if an unmatched [ is found.', t => {
  const program = '+++++[>+++++++>++<<-]>.>.[';

  const error = t.throws(brunfaick(program), Error);

  t.is(error.message, 'unmatched [');
});

test('Throws an Error if an unmatched ] bracket is found.', t => {
  const program = '+++++[>+++++++>++<<-]>.>.][';

  const error = t.throws(brunfaick(program), Error);

  t.is(error.message, 'unmatched ]');
});

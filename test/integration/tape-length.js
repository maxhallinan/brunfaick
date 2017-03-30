const assert = require('chai').assert;
const brunfaick = require('../../.');

describe('integration > tape-length', () => {
  it('Should be capable of storing at least 30000 bytes in the tape', () => {
    const program = '++++[>++++++<-]>[>+++++>+++++++<<-]>>++++<[[>[[>>+<<-]<]>>>-]>-[>+>+<<-]>]+++++[>+++++++<<++>-]>.<<.';

    const output = brunfaick(program);

    const expected = '#\n';

    assert.strictEqual(expected, output);
  });
});


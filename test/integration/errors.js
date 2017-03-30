const assert = require('chai').assert;
const brunfaick = require('../../.');

describe('integration > errors', () => {
  it('Should throw an error if mismatched brackets are found', () => {
    assert.throws(
      () => {
        brunfaick('+++++[>+++++++>++<<-]>.>.[');
      },
      SyntaxError
    );

    assert.throws(
      () => {
        brunfaick('+++++[>+++++++>++<<-]>.>.][');
      },
      SyntaxError
    );
  });

  it('Should throw an error if the byte is out of range.', () => {
    assert.throws(
      () => brunfaick('<'),
      RangeError
    );
  });
});


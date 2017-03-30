const assert = require('chai').assert;
const brunfaick = require('../../.');

describe('integration > errors', () => {
  it('Throws a SyntaxError if mismatched brackets are found', function () {
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

  it('Throws an RangeError if the byte is out of range.', function () {
    assert.throws(
      () => brunfaick('<'),
      RangeError
    );
  });

  it('Throws a TypeError if called without a `program` argument.', function () {
    assert.throws(
      () => brunfaick(),
      TypeError
    );
  });

  it('Throws a TypeError if input is not a string', function () {
    [ {}, [], true, false, null, 1, ].forEach(
      (type) => {
        assert.throws(
          () => brunfaick('', type),
          TypeError
        );
      }
    )
  });

  it('Does not throws a TypeError if input is a string', function () {
    assert.doesNotThrow(
      () => brunfaick('', ''),
      TypeError
    );
  });

  it('Does not throw a TypeError if input is undefined', function () {
    assert.doesNotThrow(
      () => brunfaick(''),
      TypeError
    );
  });
});


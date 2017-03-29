const assert = require('chai').assert;
const interpret = require('../../interpreter');

function initState(input) {
  return {
    input: '',
    output: '',
    pointer: 0,
    tape: [],
  };
}

describe('unit > interpreter', () => {
  let state;

  beforeEach(() => {
    state = initState('foo');
  });

  afterEach(() => {
    state = null;
  });

  it('Returns the state tree.', () => {
    const tokens = [];
    const state = initState('foo');

    const result = Object.keys(interpret(tokens, state));

    [ 'input', 'output', 'pointer', 'tape', ].forEach(
      key => assert.include(result, key)
    );

    assert.strictEqual(result.length, 4);
  });

  describe('commands > decrement', () => {
    it('Stores the new byte in the correct cell.', () => {
      const tokens = [ { type: '-', }, ];

      state = Object.assign(
        state,
        {
          pointer: 2,
          tape: [ , , 3, ],
        }
      );

      const result = interpret(tokens, state).tape;

      const expected = [ , , 2, ];

      assert.deepEqual(expected, result);
    });

    it('Decreases the current byte by 1.', () => {
      const tokens = [ { type: '-', }, ];

      state = Object.assign(state, { tape: [ 3, ], });

      const result = interpret(tokens, state).tape;

      const expected = [ 2, ];

      assert.deepEqual(expected, result);
    });

    it('Wraps from 0 to 255.', () => {
      const tokens = [ { type: '-', }, ];

      state = Object.assign(state, { tape: [ 0, ], });

      const result = interpret(tokens, state).tape;

      const expected = [ 255, ];

      assert.deepEqual(expected, result);
    });

    it('Treats an undefined byte as 0.', () => {
      const tokens = [ { type: '-', }, ];

      const result = interpret(tokens, state).tape;

      const expected = [ 255, ];

      assert.deepEqual(expected, result);
    });
  });

  describe('commands > increment', () => {
    it('Stores the new byte at the correct position.', () => {
      const tokens = [ { type: '+', }, ];

      state = Object.assign(
        state,
        {
          pointer: 2,
          tape: [ , , 3, ],
        }
      );

      const result = interpret(tokens, state).tape;

      const expected = [ , , 4, ];

      assert.deepEqual(expected, result);
    });

    it('Increases the current byte by 1.', () => {
      const tokens = [ { type: '+', }, ];

      state = Object.assign(state, { tape: [ 3, ], });

      const result = interpret(tokens, state).tape;

      const expected = [ 4, ];

      assert.deepEqual(expected, result);
    });

    it('Wraps from 255 to 0.', () => {
      const tokens = [ { type: '+', }, ];

      state = Object.assign(state, { tape: [ 255, ], });

      const result = interpret(tokens, state).tape;

      const expected = [ 0, ];

      assert.deepEqual(expected, result);
    });

    it('Treats an undefined byte as 0.', () => {
      const tokens = [ { type: '+', }, ];

      const result = interpret(tokens, state).tape;

      const expected = [ 1, ];

      assert.deepEqual(expected, result);
    });
  });

  describe('commands > move-left', () => {
    it('Moves the pointer 1 to the left.', () => {
      const tokens = [ { type: '<', }, ];

      state = Object.assign(state, { pointer: 1, });

      const result = interpret(tokens, state).pointer;

      const expected = 0;

      assert.deepEqual(expected, result);
    });

    it('Throws a RangeError if the next position is out of range.', () => {
      const tokens = [ { type: '<', }, ];

      assert.throws(() => interpret(tokens, state), RangeError);
    });
  });

  describe('commands > move-right', () => {
    it('Moves the pointer 1 to the right.', () => {});
  });

  describe('commands > loop', () => {
    it('Repeats the loop until the current byte is 0.', () => {});
    it('Skips the loop if the current byte is 0.', () => {});
    it('Runs an arbitrary number of nested loops.', () => {});
  });

  describe('commands > input', () => {
    it('Gets the ASCII code point for the first character of the input string.', () => {});
    it('Sets the code point as the current byte.', () => {});
    it('Removes the first character from the input string.', () => {});
  });

  describe('commands > output', () => {
    it('Gets the ASCII character at the code point equal to the current byte.', () => {});
    it('Appends the ASCII character to state.output', () => {});
  });
});


const {
  charCodeAt,
  compose,
  decrement,
  increment,
  isNan,
  fromCharCode,
} = require('../util');

// validateIncrementBite :: Number -> Number
function validateIncrementBite(bite) {
  bite = isNan(bite) ? 1 : bite;
  bite = bite > 255 ? 0 : bite;

  return bite;
}

// validateDecrementBite :: Number -> Number
function validateDecrementBite(bite) {
  bite = isNan(bite) ? 255 : bite;
  bite = bite < 0 ? 255 : bite;

  return bite;
}

// validatePointer :: Number -> Number
function validatePointer(pointer) {
  if (isNan(pointer) || pointer < 0) {
    throw new RangeError(
      'Your program used the < command one too many times in a row. ' +
      'There is no memory at cell -1.'
    );
  }

  if (pointer > 30000) {
    throw new RangeError(
      'Your program has used the > command one too many times. ' +
      'There is a 30,000 cell memory limit.'
    );
  }

  return pointer;
}

// incrementBite :: Number -> Number
const incrementBite = compose(
  validateIncrementBite,
  increment
);

// decrementBite :: Number -> Number
const decrementBite = compose(
  validateDecrementBite,
  decrement
);

// incrementPointer :: Number -> Number
const incrementPointer = compose(
  validatePointer,
  increment
);

// decrementPointer :: Number -> Number
const decrementPointer = compose(
  validatePointer,
  decrement
);

// mapBite :: Function -> Object -> Object
function mapBite(cmd) {
  return function (state) {
    const { pointer, tape, } = state;

    state.tape[pointer] = cmd(tape[pointer]);

    return state;
  };
}

// mapPointer :: Function -> Object -> Object
function mapPointer(cmd) {
  return function (state) {
    const { pointer, } = state;

    state.pointer = cmd(pointer);

    return state;
  };
}

// mapOutput :: Function -> Object -> Object
function mapOutput(cmd) {
  return function (state) {
    const { output, pointer, tape, } = state;

    state.output = output + cmd(tape[pointer]);

    return state;
  };
}

// mapInput :: Function -> Object -> Object
function mapInput(cmd) {
  return function (state) {
    const { input, pointer, } = state;

    state.tape[pointer] = cmd(input);

    state.input = input.substring(1);

    return state;
  };
}

module.exports = {
  decrement: mapBite(decrementBite),
  increment: mapBite(incrementBite),
  input: mapInput(charCodeAt),
  moveLeft: mapPointer(decrementPointer),
  moveRight: mapPointer(incrementPointer),
  output: mapOutput(fromCharCode),
};

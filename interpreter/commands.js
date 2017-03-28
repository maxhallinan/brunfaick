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
  moveLeft: mapPointer(decrement),
  moveRight: mapPointer(increment),
  output: mapOutput(fromCharCode),
};


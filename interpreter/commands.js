const {
  charCodeAt,
  compose,
  decrement,
  increment,
  fromCharCode,
  partial,
} = require('../util');

// validateIncrementBite :: Number -> Number
function validateIncrementBite(bite) {
  bite = isNaN(bite) ? 1 : bite;
  bite = bite > 255 ? 0 : bite;

  return bite;
}

// validateDecrementBite :: Number -> Number
function validateDecrementBite(bite) {
  bite = isNaN(bite) ? 255 : bite;
  bite = bite < 0 ? 255 : bite;

  return bite;
}

// validatePointer :: Number -> Number
function validatePointer(pointer) {
  if (isNaN(pointer) || pointer < 0) {
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

// mapBite :: (Function, Object) -> Object
function mapBite(cmd, lastState) {
  const { pointer, tape, } = lastState;

  const lastBite = tape[pointer];
  // @todo use a more descriptive name than cmd
  const nextBite = cmd(lastBite);

  const nextTape = [ ...tape, ];
  nextTape[pointer] = nextBite;

  const nextState = { tape: nextTape, };

  return Object.assign({}, lastState, nextState);
}

// mapPointer :: (Function, Object) -> Object
function mapPointer(cmd, lastState) {
  const { pointer, } = lastState;

  // @todo use a more descriptive name than cmd
  const nextPointer = cmd(pointer);

  const nextState = { pointer: nextPointer, };

  return Object.assign({}, lastState, nextState);
}

// mapOutput :: (Function, Object) -> Object
function mapOutput(cmd, lastState) {
  const { output, pointer, tape, } = lastState;

  const bite = tape[pointer];
  // @todo use a better name than cmd
  const nextChar = cmd(bite);

  const nextOutput = output + nextChar;

  const nextState = { output: nextOutput, };

  return Object.assign({}, lastState, nextState);
}

// mapInput :: (Function, Object) -> Object
function mapInput(cmd, lastState) {
  const { input, pointer, tape, } = lastState;

  // @todo use a better name than cmd
  const nextBite = cmd(input);
  const nextTape = [ ...tape, ];
  nextTape[pointer] = nextBite;

  const nextState = {
    input: input.substring(1),
    tape: nextTape,
  };

  return Object.assign({}, lastState, nextState);
}

module.exports = {
  decrement: partial(mapBite)(decrementBite),
  increment: partial(mapBite)(incrementBite),
  input: partial(mapInput)(charCodeAt),
  moveLeft: partial(mapPointer)(decrementPointer),
  moveRight: partial(mapPointer)(incrementPointer),
  output: partial(mapOutput)(fromCharCode),
};

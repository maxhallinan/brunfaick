const { compose, get, map, strToArr, } = require('../util');

const cmdTypes = {
  '-': 'DECREMENT',
  '+': 'INCREMENT',
  ',': 'INPUT',
  '[': 'LOOP_START',
  ']': 'LOOP_END',
  '<': 'MOVE_LEFT',
  '>': 'MOVE_RIGHT',
  '.': 'OUTPUT',
};

const symbolToType = type => get(type, cmdTypes);

const typeToToken = type => ({ type, });

const symbolToToken = compose(
  typeToToken,
  symbolToType
);

module.exports = compose(
  map(symbolToToken),
  strToArr
);

const { assign, compose, partial, set, } = require('../util');

const initialState = {
  input: '',
  output: '',
  pointer: 0,
  tape: [],
};

const initState = compose(
  // merge initialState and input object
  partial(assign)(initialState),
  // wrap input string in an object
  set({})('input')
);

module.exports = initState;

const { assign, compose, set, } = require('../util');
const Container = require('../types/container');

const initialState = {
  input: '',
  output: '',
  pointer: 0,
  tape: [],
};

const initState = compose(
  // wrap in Container functor
  Container,
  // merge initialState and input object
  assign(initialState),
  // wrap input string in an object
  set({})('input')
);

module.exports = initState;

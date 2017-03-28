const { assign, compose, set, } = require('../util');
const Container = require('../types/container');

const createState = () => ({
  input: '',
  output: '',
  pointer: 0,
  tape: [],
});

const initState = compose(
  // wrap in Container functor
  Container,
  // merge initialState and input object
  input => assign(createState())(input),
  // wrap input string in an object
  set({})('input')
);

module.exports = initState;

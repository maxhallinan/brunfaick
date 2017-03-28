const initState = (input = '') => ({
  input,
  output: '',
  pointer: 0,
  tape: [],
});

module.exports = initState;

const { compose, } = require('../util');
const initState = require('./init-state');

const interpret = ast => compose(
  state => [ JSON.stringify(ast), JSON.stringify(state), ],
  initState
);

module.exports = interpret;

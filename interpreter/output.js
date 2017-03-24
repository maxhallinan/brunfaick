const { curry, get, } = require('../util');

module.exports = state => state.fold(curry(get)('output'));

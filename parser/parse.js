const { reduce, } = require('../util');

// function parseLoopBody(tokens) {
//   let body = [];

//   for (let i = 0; i < tokens.length; i++) {
//     const token = tokens[i];
//     const { type, } = token;

//     const isEnd = type === 'LOOP_END';
//     const isStart = type === 'LOOP_START';

//     if (isEnd) {
//       break;
//     }

//     if (isStart) {
//       return parseLoop(tokens.splice(i));
//     }

//     body.push(token);
//   }

//   return body;
// }

// function parseLoop(tokens) {
//   return {
//     type: 'LOOP',
//     body: parseLoopBody(tokens),
//   };
// }

// function parse(ast, token, index, tokens) {
//   const { type, } = token;

//   if (type === 'LOOP_START') {
//     token = parseLoop(tokens.splice(index + 1));
//   }

//   ast.push(token);

//   return ast;
// }

module.exports = tokens => tokens;

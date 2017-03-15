const { compose, } = require('../util');

const isCmtLoop = str => str[0] === '[';

function stripCmtLoop(str) {
  let cmtEnd;
  let closeBrkts = 0;
  let openBrkts = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '[') {
      openBrkts += 1;
    }

    if (str[i] === ']') {
      closeBrkts += 1;
    }

    if (openBrkts === closeBrkts) {
      cmtEnd = i;

      break;
    }
  }

  if (!cmtEnd) {
    // @todo improve error message
    throw new SyntaxError('Missing closing loop bracket.');
  }

  return str.substring(cmtEnd + 1);
}

const strip = str => str.replace(/[^><+-.,[\]]+/g, '');

module.exports = compose(
  // strip comment loop
  str => (isCmtLoop(str) && stripCmtLoop(str)) || str,
  // strip all non-Brainfuck characters
  strip
);

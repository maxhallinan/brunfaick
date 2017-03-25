function parse(tokens) {
  const body = [];

  while (tokens.length) {
    let token = tokens.shift();

    if (token.type === 'LOOP_START') {
      token = {
        type: 'LOOP',
        body: parse(tokens),
      };
    }

    if (token.type === 'LOOP_END') {
      break;
    }

    body.push(token);
  }

  return body;
}

module.exports = parse;

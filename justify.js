const { EOL } = require('os');

const divider = ' ';

const injectSpaces = (tokens, spaces) => {
  let i = 0;
  let line = '';
  while (i < tokens.length) {
    line += tokens[i];
    if (i < spaces.length) {
      line += divider.repeat(spaces[i]);
    }
    i++;
  }
  return line;
};

const sanitize = line => line.replace(/\s+/g, divider).trim();

const justify = (inputLine, length) => {
  const line = sanitize(inputLine);
  if (length < line.length) {
    const left = line.substring(0, length);
    const right = line.substring(length).trim();
    const justified = justify(left, length) + EOL;
    if (right.length < length) {
      return justified + right;
    }
    return justified + justify(right, length);
  }
  const tokens = line.split(divider);
  if (tokens.length <= 1) {
    return line;
  }
  const spaces = new Array(tokens.length - 1).fill(1);

  let remaining = line.length;
  let i = 0;
  while (remaining < length) {
    spaces[i]++;
    remaining++;
    i++;
    if (i === spaces.length) {
      i = 0;
    }
  }
  return injectSpaces(tokens, spaces);
};

module.exports = justify;

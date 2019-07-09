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

// Let's assume we want a sensible number of spaces before we begin:
const normalize = line => line.replace(/\s+/g, divider).trim();

const justify = (inputLine, length) => {
  const line = normalize(inputLine);
  if (length < line.length) {
    // If the desired length is smaller than the provided string
    // we assume that we want a multiline string as a result
    // Note that this truncates words instead of wrapping them by spaces
    const left = line.substring(0, length).trim();
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

  // First we count how many spaces we'll need between words
  // We prioritize space injection on the leftmost slots first
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

const { EOL } = require('os');
const justify = require('./justify');

test('Should justify simple line', () => {
  const input = 'The quick brown fox jumps over the lazy dog.';
  const expected = 'The  quick  brown  fox  jumps  over  the  lazy  dog.';
  const res = justify(input, 52);
  expect(res).toBe(expected);
});

test('Should work with unequal spaces', () => {
  const input = 'a dog ate my pen';
  const expected = 'a   dog   ate  my  pen';
  const res = justify(input, 22);
  expect(res).toBe(expected);
});

test('Should work with single words', () => {
  const input = 'puppy';
  const res = justify(input, 30);
  expect(res).toBe(input);
});

test('Should work with multi-spaced strings', () => {
  const input = 'so    far     apart';
  const expected = 'so  far  apart';
  const res = justify(input, 14);
  expect(res).toBe(expected);
});

test('Should wrap when provided length is smaller than string length', () => {
  const input = 'The quick brown fox jumps over the lazy dog.';
  const expected = [
    'The  quick',
    'brown  fox',
    'jumps over',
    'the lazy d',
    'og.',
  ].join(EOL);
  const res = justify(input, 10);
  expect(res).toBe(expected);
});

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

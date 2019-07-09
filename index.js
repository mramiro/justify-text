/*
 * The  quick  brown  fox  jumps  over  the  lazy  dog.
 * 12345678901234567890123456789012345678901234567890123456789
 */
const justify = require('./justify');

const line = process.argv[2];
const length = process.argv[3];
const res = justify(line, length);
console.log(res);

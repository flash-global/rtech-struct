const { literal, object, size, string } = require('superstruct');

const AddressFilter = object({
  name: literal('QUERY'),
  value: size(string(), 1, 256),
});

module.exports = { AddressFilter }

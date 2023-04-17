const { enums, object, size, string } = require('superstruct');

const AddressFilter = object({
  name: enums(['QUERY']),
  value: size(string(), 1, 256),
});

module.exports = { AddressFilter }

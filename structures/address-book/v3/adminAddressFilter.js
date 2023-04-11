const { literal, object, size, string } = require('superstruct');

const AdminAddressFilter = object({
  name: literal('QUERY', 'GROUP'),
  value: size(string(), 1, 256),
});

module.exports = { AdminAddressFilter }

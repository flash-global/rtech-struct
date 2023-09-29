const { enums, object, size, string } = require('superstruct')

const AdminAddressFilter = object({
  name: enums(['QUERY', 'GROUP']),
  value: size(string(), 1, 256)
})

module.exports = { AdminAddressFilter }

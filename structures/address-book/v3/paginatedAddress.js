const { array, integer, object } = require('superstruct');
const Address = require('./address');

const PaginatedAddress = object({
  current_page: integer(),
  total_pages: integer(),
  addresses: array(Address),
});

module.exports = { PaginatedAddress }

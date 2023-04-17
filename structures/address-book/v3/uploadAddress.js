const { object, optional, size, string } = require('superstruct');

const UploadAddress = object({
  alias: optional(size(string(), 1, 64)),
  company_name: optional(size(string(), 1, 128)),
  address_street: size(string(), 1, 128),
  address_additional_street: optional(size(string(), 1, 128)),
  address_city: size(string(), 1, 64),
  address_zip_code: size(string(), 2, 32),
  address_country: size(string(), 2, 2)
});

module.exports = { UploadAddress }

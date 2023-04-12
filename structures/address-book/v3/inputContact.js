const { defaulted, object, optional, size, string } = require('superstruct');
const { Email, Uuid } = require('../../lib');
const { v4: uuidV4 } = require('uuid');

const InputContact = object({
  id: defaulted(Uuid, () => uuidV4()),
  company: optional(size(string(), 1, 128)),
  phone_number: optional(size(string(), 1, 32)),
  email: optional(size(Email, 2, 128)),
  name: optional(size(string(), 1, 64)),
});

module.exports = { InputContact }

const { array, object, size, string } = require('superstruct');

const InputGroup = object({
  id: string(),
  members: array(size(string(), 1, 64))
});

module.exports = { InputGroup }

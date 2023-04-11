const { array, object, string } = require('superstruct');

const InputGroup = object({
  id: size(string(), 1, 64),
  members: array(size(string(), 1, 64))
});

module.exports = { InputGroup }

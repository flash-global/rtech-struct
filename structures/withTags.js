const { type, optional, array, string } = require('superstruct');

exports.withTags = () => type({
  tags: optional(array(string())),
});

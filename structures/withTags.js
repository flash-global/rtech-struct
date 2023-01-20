const {
  type,
  optional,
  array,
  enums,
  refine,
} = require('superstruct');

exports.withTags = (allowedTags = [], maxLength = 0) => {
  const cappedArray = refine(
    array(enums(allowedTags)),
    'cappedArray',
    (val) => val.length <= maxLength,
  );
  return type({
    tags: optional(cappedArray),
  });
};

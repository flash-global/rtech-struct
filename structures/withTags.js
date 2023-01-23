const {
  type,
  optional,
  array,
  enums,
  refine,
} = require('superstruct');

exports.withTags = (authorizedTags = [], maxTags = 0) => {
  const cappedArray = refine(
    array(enums(authorizedTags)),
    'cappedArray',
    (val) => val.length <= maxTags,
  );
  return type({
    tags: optional(cappedArray),
  });
};

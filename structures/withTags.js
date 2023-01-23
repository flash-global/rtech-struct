const {
  type,
  optional,
  array,
  enums,
  refine,
} = require('superstruct');

exports.withTags = (config) => {
  // const authorizedTags = config?.authorizedTags ?? [];
  // *  To use the syntax above you need to use ecmaVersion >= 2020
  // *  To have proper intellisense bump up parserOptions.ecmaVersion in .eslintrc
  let authorizedTags = [];
  if (config && Array.isArray(config.authorizedTags)) {
    authorizedTags = config.authorizedTags;
  }
  let maxTags = 0;
  if (config && typeof config.maxTags === 'number') {
    maxTags = config.maxTags;
  }
  const cappedArray = refine(
    array(enums(authorizedTags)),
    'cappedArray',
    (val) => val.length <= maxTags,
  );
  return type({
    tags: optional(cappedArray),
  });
};

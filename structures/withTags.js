const { type, optional, array, enums, number, refine } = require('superstruct')

exports.withTags = (config = {}) => {
  const authorizedTags = Array.isArray(config?.authorizedTags) ? config.authorizedTags : []

  const tagsStruct = array(enums(authorizedTags))

  // If maxTags is defined, refine the tags structure to ensure its length doesn't exceed maxTags
  const refinedTagsStruct =
    config.maxTags && typeof config.maxTags === 'number'
      ? refine(tagsStruct, 'Max tags exceeded', (tags) => tags.length <= config.maxTags)
      : tagsStruct

  return type({
    tags: optional(refinedTagsStruct),
    maxTags: optional(number())
  })
}

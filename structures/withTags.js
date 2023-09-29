const { type, optional, array, enums, number, refine } = require('superstruct')

/**
 * Creates a superstruct type for an object with an optional tags property.
 * The tags property is an array of strings, and its values are validated against the authorizedTags array.
 * If maxTags is defined, the length of the tags array is also validated to ensure it doesn't exceed maxTags.
 *
 * @param {Object} config - Configuration object for the struct.
 * @param {string[]} [config.authorizedTags] - Array of authorized tag strings. Defaults to an empty array if not provided.
 * @param {number | undefined} [config.maxTags] - Maximum number of tags allowed. If defined, the length of the tags array should not exceed this number. If undefined, then there's no limit of the quantity of tags.
 * @returns {superstruct.Struct} A superstruct type representing the struct.
 */
exports.withTags = (config = {}) => {
  const authorizedTags = Array.isArray(config?.authorizedTags) ? config.authorizedTags : []

  const tagsStruct = array(enums(authorizedTags))

  // If maxTags is defined, refine the tags structure to ensure its length doesn't exceed maxTags
  const refinedTagsStruct =
    config?.maxTags && typeof config?.maxTags === 'number'
      ? refine(tagsStruct, 'Max tags exceeded', (tags) => tags.length <= config.maxTags)
      : tagsStruct

  return type({
    tags: optional(refinedTagsStruct),
    maxTags: optional(number())
  })
}

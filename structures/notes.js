const s = require('superstruct')

exports.notes = s.optional(s.size(s.string(), 1, 512))

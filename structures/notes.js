const s = require('superstruct')

exports.notes = s.optional(s.union([s.size(s.array(s.size(s.string(), 1, 512)), 1, 1), s.size(s.string(), 1, 512)]))

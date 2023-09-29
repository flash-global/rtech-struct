const s = require('superstruct')

const Shipper = s.object({
  commercial_group: s.size(s.string(), 1, Infinity)
})

module.exports = { Shipper }

const s = require('superstruct')

const Shipper = s.object({
    company_name: s.size(s.string(), 1, Infinity)
})

module.exports = { Shipper }

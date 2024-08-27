const s = require('superstruct')
const { NoEmptyString } = require('./string')
const { PositiveNumber } = require('./number')

const RequestedTransport = s.object({
  way: s.size(s.array(NoEmptyString), 2, 50),
  vehicles: s.defaulted(s.optional(s.size(s.array(NoEmptyString), 0, 15)), []),
  distances: s.size(s.array(PositiveNumber), 1, 10)
})

module.exports = {
  RequestedTransport: RequestedTransport
}

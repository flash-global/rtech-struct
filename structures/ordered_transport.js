const s = require('superstruct')
const { PositiveNumber } = require('./number')
const { PartialPoint } = require('./partial_point')
const { Incoterm } = require('./incoterm')
const { Package } = require('./package')

const OrderedTransport = s.object({
  packages: s.size(s.array(Package), 0, 50),
  points: s.size(s.array(PartialPoint), 2, 20),
  distances: s.size(s.array(PositiveNumber), 1, 10),
  incoterm: s.optional(Incoterm)
})

module.exports = {
  OrderedTransport: OrderedTransport
}

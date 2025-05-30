const s = require('superstruct')
const { PositiveNumber } = require('./number')
const { PartialPointOrder } = require('./partial_point_order')
const { Incoterm } = require('./incoterm')
const { PackageOrder } = require('./package_order')

const OrderedTransport = s.object({
  packages: s.size(s.array(PackageOrder), 0, 50),
  points: s.size(s.array(PartialPointOrder), 2, 20),
  distances: s.size(s.array(PositiveNumber), 1, 10),
  incoterm: s.optional(Incoterm)
})

module.exports = {
  OrderedTransport: OrderedTransport
}

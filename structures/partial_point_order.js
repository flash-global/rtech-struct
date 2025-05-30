const s = require('superstruct')
const { NoEmptyString } = require('./string')
const { PartialAddressOrder } = require('./partial_address_order')
const { PartialContact } = require('./partial_contact')
const { DateTime } = require('./date')

const PartialPointOrder = s.object({
  key: NoEmptyString,
  arrival_from: DateTime,
  arrival_until: DateTime,
  address: PartialAddressOrder,
  contact: s.optional(PartialContact),
  package_to_load: s.size(s.array(NoEmptyString), 0, 50),
  package_to_unload: s.size(s.array(NoEmptyString), 0, 50)
})

module.exports = {
  PartialPointOrder: PartialPointOrder
}

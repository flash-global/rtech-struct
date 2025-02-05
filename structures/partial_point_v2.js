const s = require('superstruct')
const { NoEmptyString } = require('./string')
const { PartialAddressNoTimezone } = require('./partial_address_no_timezone')
const { PartialContact } = require('./partial_contact')
const { DateTime } = require('./date')

const PartialPointV2 = s.object({
  key: NoEmptyString,
  arrival_from: DateTime,
  arrival_until: DateTime,
  address: PartialAddressNoTimezone,
  contact: s.optional(PartialContact),
  package_to_load: s.size(s.array(NoEmptyString), 0, 50),
  package_to_unload: s.size(s.array(NoEmptyString), 0, 50)
})

module.exports = {
  PartialPointV2: PartialPointV2
}

const s = require('superstruct')
const { NoEmptyString } = require('./string')
const { Tz } = require('./tz_string')
const { Position } = require('./position')

const PartialAddress = s.object({
  street: s.optional(NoEmptyString),
  additional_street: s.optional(NoEmptyString),
  city: NoEmptyString,
  country: s.size(s.string(), 2),
  position: Position,
  timezone_string: Tz,
  zip_code: NoEmptyString,
  instruction: s.optional(NoEmptyString),
  step_address_code: s.optional(s.string()),
  shipper_address_code: s.optional(s.string()),
  is_eu: s.optional(s.string())
})

module.exports = {
  PartialAddress: PartialAddress
}

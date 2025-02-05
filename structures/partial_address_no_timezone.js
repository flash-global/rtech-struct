const s = require('superstruct')
const { NoEmptyString } = require('./string')
const { Tz } = require('./tz_string')
const { Position } = require('./position')

const PartialAddressNoTimezone = s.object({
  street: s.optional(NoEmptyString),
  additional_street: s.optional(NoEmptyString),
  city: NoEmptyString,
  country: s.size(s.string(), 2),
  position: Position,
  timezone_string: s.optional(Tz),
  zip_code: NoEmptyString,
  instruction: s.optional(NoEmptyString)
})

module.exports = {
  PartialAddressNoTimezone: PartialAddressNoTimezone
}

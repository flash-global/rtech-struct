const s = require('superstruct')
const { NoEmptyString } = require('./string')
const { NoEmptyStringPlus } = require('./string_plus')
const { Tz } = require('./tz_string')
const { Position } = require('./position')

const PartialAddress = s.object({
  street: s.optional(NoEmptyStringPlus),
  additional_street: s.optional(NoEmptyStringPlus),
  city: NoEmptyStringPlus,
  country: s.size(s.string(), 2),
  position: Position,
  timezone_string: Tz,
  zip_code: NoEmptyStringPlus,
  instruction: s.optional(NoEmptyStringPlus),
})

module.exports = {
  PartialAddress: PartialAddress
}

const s = require('superstruct')
const { isEmail } = require('validator')
const { NoEmptyString } = require('./string')

const Email = s.define('Email', isEmail)

const PartialContact = s.object({
  company_name: s.optional(NoEmptyString),
  email: s.optional(Email),
  name: s.optional(NoEmptyString),
  phone: s.optional(NoEmptyString)
})

module.exports = {
  PartialContact: PartialContact
}

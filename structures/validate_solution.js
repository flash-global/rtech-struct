const s = require('superstruct')
const { NoEmptyString } = require('./string')
const { bid } = require('./bid')
const { CustomField } = require('./custom_field')
const { Invoice } = require('./invoice')
const { Reference } = require('./reference')
const { OrderedTransport } = require('./ordered_transport')

const ValidateSolution = s.object({
  key: s.optional(NoEmptyString),
  comment: s.optional(s.string()),
  transport: OrderedTransport,
  extras: s.defaulted(s.optional(s.size(s.array(NoEmptyString), 0, 50)), []),
  custom_fields: s.optional(s.size(s.array(CustomField), 0, 10)),
  selected_solution: bid(),
  invoice: s.optional(Invoice),
  notifications: s.optional(s.size(s.array(s.object()), 0, 5)),
  references: s.optional(s.size(s.array(Reference), 0, 5)),
  decision_maker: s.optional(NoEmptyString)
})

module.exports = {
  ValidateSolution: ValidateSolution
}

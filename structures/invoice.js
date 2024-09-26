const s = require('superstruct')
const { NoEmptyString } = require('./string')
const { Currency } = require('./currency')

const Invoice = s.object({
  bill_to: NoEmptyString,
  currency: s.optional(Currency)
})

module.exports = {
  Invoice: Invoice
}

const s = require('superstruct')
const { NoEmptyString } = require('./string')

const PurchasingExtras = s.object({
  stepA: NoEmptyString,
  stepB: NoEmptyString,
  currency: NoEmptyString,
  currencyAmount: s.number()
})

module.exports = { PurchasingExtras }

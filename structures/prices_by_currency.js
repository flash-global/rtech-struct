const s = require('superstruct')
const { PositiveNumber } = require('./number')
const { Currency } = require('./currency')

const PriceByCurrencyItem = s.object({
  currency: Currency,
  price: s.min(PositiveNumber, 0.01),
  exchange_rate: s.min(PositiveNumber, 0.01)
})

const PricesByCurrency = s.optional(s.array(PriceByCurrencyItem))

module.exports = {
  PriceByCurrencyItem: PriceByCurrencyItem,
  PricesByCurrency: PricesByCurrency
}

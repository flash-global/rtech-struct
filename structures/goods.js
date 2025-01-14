const s = require('superstruct')
const { PositiveNumber } = require('./number')

const Goods = s.object({
  value: PositiveNumber,
  currency: s.optional(s.string())
})

module.exports = {
  Goods: Goods
}

const s = require('superstruct')

const AgreedPriceNoPurchase = s.object({
    type: s.union([s.literal('no-purchase'), s.literal('agreed-price-without-purchase')])
})

module.exports = {
    AgreedPriceNoPurchase: AgreedPriceNoPurchase
}

const s = require('superstruct')

const AgreedPriceNoPurchase = s.object({
    type: s.literal('agreed-price-no-purchase')
})

module.exports = {
    AgreedPriceNoPurchase: AgreedPriceNoPurchase
}

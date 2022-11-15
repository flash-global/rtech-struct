const s = require('superstruct')

const LegacyAgreedPrice = s.object({
    type: s.union([s.literal('legacy-agreed-price'), s.literal('legacy-agreed-price')])
})

module.exports = {
    LegacyAgreedPrice: LegacyAgreedPrice
}

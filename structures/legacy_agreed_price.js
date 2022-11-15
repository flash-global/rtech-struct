const s = require('superstruct')

const LegacyAgreedPrice = s.object({
    type: s.literal('legacy-agreed-price')
})

module.exports = {
    LegacyAgreedPrice: LegacyAgreedPrice
}

const s = require('superstruct')
const { NoEmptyString } = require('./string')

const rate2SpotRequestBody = s.object({
  key: NoEmptyString,
  shipperId: NoEmptyString,
  agencyId: NoEmptyString,
  creatorRequestId: NoEmptyString
})

const SQSResponseRate2Spot = s.object({
  id: NoEmptyString,
  namespace: NoEmptyString,
  key: NoEmptyString,
  scheduled_at: NoEmptyString,
  data: rate2SpotRequestBody
})

module.exports = { SQSResponseRate2Spot }

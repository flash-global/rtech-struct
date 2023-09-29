const { defaulted, integer, string, object } = require('superstruct')
const IsoDate = require('../../lib').isodate()
const { v4: uuidV4 } = require('uuid')
const { Uuid } = require('../../lib')

const Score = object({
  id: defaulted(Uuid, () => uuidV4()),
  value: integer(),
  created_at: IsoDate,
  updated_at: IsoDate
})

module.exports = { Score }

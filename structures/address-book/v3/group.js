const { array, object, size, string } = require('superstruct')
const IsoDate = require('../../lib').isodate()

const Group = object({
  id: size(string(), 1, 64),
  members: array(size(string(), 1, 64)),
  created_at: IsoDate,
  updated_at: IsoDate
})

module.exports = { Group }

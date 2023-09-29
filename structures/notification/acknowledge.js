const s = require('superstruct')
const { Uuid } = require('../lib')

const NOTIFICATION_IDS_SIZE_MIN = 1
const NOTIFICATION_IDS_SIZE_MAX = 512

const structure = s.object({
  name: s.string(),
  notificationsIds: s.size(s.array(Uuid), NOTIFICATION_IDS_SIZE_MIN, NOTIFICATION_IDS_SIZE_MAX)
})

module.exports = { structure, NOTIFICATION_IDS_SIZE_MIN, NOTIFICATION_IDS_SIZE_MAX }

const s = require('superstruct')
const { Uuid } = require('../lib')

const ENTITY_TYPE = 'notification/in-app'

const structure = s.defaulted(
  s.type({
    content: s.object(),
    type: s.optional(s.literal(ENTITY_TYPE)),
    notification_type: s.string(),
    id: s.optional(Uuid),
    createdAt: s.optional(s.string()),
    acknowledges: s.optional(s.array(s.string())),
    recipients: s.optional(s.array(s.string()))
  }),
  () => ({
    id: require('uuid').v4(),
    createdAt: new Date().toISOString(),
    type: ENTITY_TYPE,
    acknowledges: [],
    recipients: []
  })
)

module.exports = { structure }

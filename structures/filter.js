const s = require('superstruct')
const { Uuid } = require('./lib')

const Filter = s.defaulted(
  s.type({
    id: s.optional(Uuid),
    label: s.size(s.string(), 2, 64),
    data: s.object()
  }),
  () => ({
    id: require('uuid').v4()
  })
)

const Filters = s.array(Filter)

module.exports = {
  filter: Filter,
  filters: Filters
}

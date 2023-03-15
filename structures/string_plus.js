const s = require('superstruct')
const { sanitize } = require('./sanitize')

const NoEmptyStringPlus = s.refine(s.string(), "NoEmptyStringPlus", (value) => {
  return sanitize(value).length > 1
})

module.exports = {
    NoEmptyStringPlus: NoEmptyStringPlus
}
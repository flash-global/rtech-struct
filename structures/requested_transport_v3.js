const s = require('superstruct')
const { NoEmptyString } = require('./string')

// existing validation
const validateDistance = (distances) => {
  if (Array.isArray(distances) && distances.length >= 1 && distances.length <= 10) {
    return distances.every((distance) => {
      return typeof distance === 'number' && distance >= 0
    })
  }

  return false
}

const RequestedTransport = s.object({
  way: s.size(s.array(NoEmptyString), 2, 50),
  vehicles: s.defaulted(s.optional(s.size(s.array(NoEmptyString), 0, 15)), []),
  distances: s.refine(s.any(), 'Distances', (distances, ctx) => {
    const payload = ctx.branch[0]

    if (Array.isArray(payload.transports) && payload.transports[0].way.length == 2) {
      return distances === undefined || distances.length === 0 || validateDistance(distances)
    }

    return validateDistance(distances)
  })
})

module.exports = {
  RequestedTransport: RequestedTransport
}

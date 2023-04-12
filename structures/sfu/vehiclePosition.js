const s = require('superstruct')
const { Position } = require('../position');

const VehiclePosition = s.object({
  data: Position
})

module.exports = {
  vehiclePosition: VehiclePosition
}

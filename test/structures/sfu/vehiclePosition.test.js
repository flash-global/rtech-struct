const { vehiclePosition } = require('../../../structures/sfu/vehiclePosition');
const { assert, is } = require('superstruct');

describe('vehiclePosition object structure', () => {
  test('Success: vehicle position', () => {
    const positionData = {
      data: {
        lat: 49.221935,
        lon: 6.217841,
      },
    };

    expect(() => assert(positionData, vehiclePosition)).not.toThrow();
    expect(is(positionData, vehiclePosition)).toBe(true);
  });
});

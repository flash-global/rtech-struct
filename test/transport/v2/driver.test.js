const s = require('superstruct')
const struct = require('../../../structures/transport/v2/driver')

describe('Driver object structure', () => {
  test('Success: Driver structure', () => {
    expect(s.is({
      name: 'Vincent Simonin',
    }, struct.driver)).toBeTruthy()

    expect(s.is({
      name: 'Vincent Simonin',
      phone: '+33 6 61 10 10 10'
    }, struct.driver)).toBeTruthy()

    expect(s.is({}, struct.driver)).toBeFalsy()
  })
})

const s = require('superstruct')
const struct = require('../../structures/contact')

describe('Contact object structure', () => {
  test('Success: Contact structure', () => {
    expect(
      s.is(
        {
          company: 'Redspher',
          name: 'Vincent Simonin',
          phone: '+33 6 61 10 32 29',
          email: 'vincent.simonin@redspher.com'
        },
        struct.contact
      )
    ).toBeTruthy()

    expect(s.is({}, struct.contact)).toBeFalsy()

    expect(
      s.is(
        {
          company: null,
          name: null,
          phone: null,
          email: null
        },
        struct.contact
      )
    ).toBeFalsy()

    expect(
      s.is(
        {
          company: '',
          name: '',
          phone: '',
          email: ''
        },
        struct.contact
      )
    ).toBeFalsy()
  })
})

describe('Auction Contact object structure', () => {
  test('Success: auctionContact allows 128 chars for company and name', () => {
    const value = ['C'.repeat(128), 'N'.repeat(128), 'test@example.com', '0123456789']
    const [error, result] = s.validate(value, struct.auctionContact)
    expect(error).toBeUndefined()
    expect(result).toBeDefined()
  })

  test('Failed: auctionContact company exceeds 128 chars', () => {
    const value = ['C'.repeat(129), 'Name', 'test@example.com', '0123456789']
    const [error, result] = s.validate(value, struct.auctionContact)
    expect(error).toBeDefined()
    expect(error).toHaveProperty('key', 0)
    expect(result).toBeUndefined()
  })

  test('Failed: auctionContact name exceeds 128 chars', () => {
    const value = ['Company', 'N'.repeat(129), 'test@example.com', '0123456789']
    const [error, result] = s.validate(value, struct.auctionContact)
    expect(error).toBeDefined()
    expect(error).toHaveProperty('key', 1)
    expect(result).toBeUndefined()
  })

  test('Success: auctionContact with empty email', () => {
    const value = ['Company', 'Name', '', '0123456789']
    const [error, result] = s.validate(value, struct.auctionContact)
    expect(error).toBeUndefined()
    expect(result).toBeDefined()
  })

  test('Failed: auctionContact with invalid email', () => {
    const value = ['Company', 'Name', 'not-an-email', '0123456789']
    const [error, result] = s.validate(value, struct.auctionContact)
    expect(error).toBeDefined()
    expect(error).toHaveProperty('key', 2)
    expect(result).toBeUndefined()
  })

  test('Failed: auctionContact phone exceeds 64 chars', () => {
    const value = ['Company', 'Name', 'test@example.com', '9'.repeat(65)]
    const [error, result] = s.validate(value, struct.auctionContact)
    expect(error).toBeDefined()
    expect(error).toHaveProperty('key', 3)
    expect(result).toBeUndefined()
  })
})

const { Address } = require('../../../../structures/address-book/v3/address')
const { validate } = require('superstruct')

const createValidAddress = () => ({
  street: '123 Main St',
  city: 'New York',
  country: 'US',
  position: {
    lat: 40.7128,
    lon: -74.006
  },
  timezone: 'America/New_York',
  contacts: [],
  scores: [],
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
})

describe('Address Structure', () => {
  test('Success: Address', () => {
    const validAddress = createValidAddress()
    const [error, result] = validate(validAddress, Address, { coerce: true })
    expect(error).toBeUndefined()
    expect(result).toBeDefined()
    expect(result.id).toBeDefined()
  })

  test('Failure: Address - Uncoerced', () => {
    const validAddress = createValidAddress()
    const [error, result] = validate(validAddress, Address, { coerce: false })
    expect(error).toBeDefined()
    expect(result).toBeUndefined()
  })

  test('Failure: Address - Missing required field', () => {
    const invalidAddress = { ...createValidAddress(), street: undefined }
    const [error, result] = validate(invalidAddress, Address, { coerce: true })
    expect(error).toBeDefined()
    expect(result).toBeUndefined()
  })

  test('Failure: Address - Invalid position', () => {
    const invalidAddress = { ...createValidAddress(), position: { lat: 'invalid', lon: -74.006 } }
    const [error, result] = validate(invalidAddress, Address, { coerce: true })
    expect(error).toBeDefined()
    expect(result).toBeUndefined()
  })

  test('Failure: Address - Invalid timezone', () => {
    const invalidAddress = { ...createValidAddress(), timezone: 'invalid/timezone' }
    const [error, result] = validate(invalidAddress, Address, { coerce: true })
    expect(error).toBeDefined()
    expect(result).toBeUndefined()
  })

  test('Failure: Address - Invalid contacts', () => {
    const invalidAddress = { ...createValidAddress(), contacts: [{ name: 'John Doe', email: 'invalid_email' }] }
    const [error, result] = validate(invalidAddress, Address, { coerce: true })
    expect(error).toBeDefined()
    expect(result).toBeUndefined()
  })

  test('Failure: Address - Invalid scores', () => {
    const invalidAddress = { ...createValidAddress(), scores: [{ value: 'invalid' }] }
    const [error, result] = validate(invalidAddress, Address, { coerce: true })
    expect(error).toBeDefined()
    expect(result).toBeUndefined()
  })

  test('Failure: Address - Invalid created_at', () => {
    const invalidAddress = { ...createValidAddress(), created_at: 'invalid_date' }
    const [error, result] = validate(invalidAddress, Address, { coerce: true })
    expect(error).toBeDefined()
    expect(result).toBeUndefined()
  })

  test('Failure: Address - Invalid updated_at', () => {
    const invalidAddress = { ...createValidAddress(), updated_at: 'invalid_date' }
    const [error, result] = validate(invalidAddress, Address, { coerce: true })
    expect(error).toBeDefined()
    expect(result).toBeUndefined()
  })
})

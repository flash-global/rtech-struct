const { Contact } = require('../../../../structures/address-book/v3/contact')
const { validate } = require('superstruct')
const { v4: uuidV4 } = require('uuid')

const createValidBaseContact = () => ({
  company: 'Example Company',
  phone_number: '123-456-7890',
  email: 'john.doe@example.com',
  name: 'John Doe'
})

const createValidContact = () => ({
  ...createValidBaseContact(),
  scores: [
    {
      id: uuidV4(),
      value: 5,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ],
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
})

describe('Contact Structure', () => {
  test('Success: Contact', () => {
    const validContact = createValidContact()
    const [error, result] = validate(validContact, Contact, { coerce: true })
    expect(error).toBeUndefined()
    expect(result).toBeDefined()
    expect(result.id).toBeDefined()
  })

  test('Failure: Contact - Uncoerced', () => {
    const validContact = createValidContact()
    const [error, result] = validate(validContact, Contact, { coerce: false })
    expect(error).toBeDefined()
    expect(result).toBeUndefined()
  })

  test('Failure: Contact - Invalid scores', () => {
    const invalidContact = { ...createValidContact(), scores: ['INVALID'] }
    const [error, result] = validate(invalidContact, Contact, { coerce: true })
    expect(error).toBeDefined()
    expect(result).toBeUndefined()
  })

  test('Failure: Contact - Missing created_at', () => {
    const invalidContact = { ...createValidContact(), created_at: undefined }
    const [error, result] = validate(invalidContact, Contact, { coerce: true })
    expect(error).toBeDefined()
    expect(result).toBeUndefined()
  })

  test('Failure: Contact - Missing updated_at', () => {
    const invalidContact = { ...createValidContact(), updated_at: undefined }
    const [error, result] = validate(invalidContact, Contact, { coerce: true })
    expect(error).toBeDefined()
    expect(result).toBeUndefined()
  })
})

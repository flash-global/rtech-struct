const { UploadAddress } = require('../../../../structures/address-book/v3/uploadAddress')
const { assert, is } = require('superstruct')

const createValidUploadAddress = () => ({
  alias: 'Headquarters',
  company_name: 'Example Company',
  address_street: '123 Main St',
  address_additional_street: 'Suite 100',
  address_city: 'New York',
  address_zip_code: '10001',
  address_country: 'US'
})

const createInvalidUploadAddress = () => ({
  ...createValidUploadAddress(),
  address_street: ''
})

describe('UploadAddress Structure', () => {
  test('Success: UploadAddress', () => {
    const validUploadAddress = createValidUploadAddress()
    expect(() => assert(validUploadAddress, UploadAddress)).not.toThrow()
    expect(is(validUploadAddress, UploadAddress)).toBe(true)
  })

  test('Failure: UploadAddress - Missing required field', () => {
    const invalidUploadAddress = { ...createValidUploadAddress(), address_street: undefined }
    expect(() => assert(invalidUploadAddress, UploadAddress)).toThrow()
    expect(is(invalidUploadAddress, UploadAddress)).toBe(false)
  })

  test('Failure: UploadAddress - Empty required field', () => {
    const invalidUploadAddress = createInvalidUploadAddress()
    expect(() => assert(invalidUploadAddress, UploadAddress)).toThrow()
    expect(is(invalidUploadAddress, UploadAddress)).toBe(false)
  })

  test('Failure: UploadAddress - Invalid country code', () => {
    const invalidUploadAddress = { ...createValidUploadAddress(), address_country: 'USA' }
    expect(() => assert(invalidUploadAddress, UploadAddress)).toThrow()
    expect(is(invalidUploadAddress, UploadAddress)).toBe(false)
  })
})

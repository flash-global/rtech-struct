const { UploadJobState } = require('../../../../structures/address-book/v3/uploadJobState')
const { validate } = require('superstruct')

const createValidUploadJobState = () => ({
  status: 'PENDING',
  states: [
    {
      index: 0,
      status: 'SUCCESS'
    }
  ],
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
})

describe('UploadJobState Structure', () => {
  test('Success: UploadJobState', () => {
    const validUploadJobState = createValidUploadJobState()
    const [error, result] = validate(validUploadJobState, UploadJobState, { coerce: true })
    expect(error).toBeUndefined()
    expect(result).toBeDefined()
    expect(result.id).toBeDefined()
  })

  test('Failure: UploadJobState - Uncoerced', () => {
    const validUploadJobState = createValidUploadJobState()
    const [error, result] = validate(validUploadJobState, UploadJobState, { coerce: false })
    expect(error).toBeDefined()
    expect(result).toBeUndefined()
  })

  test('Failure: UploadJobState - Missing required field', () => {
    const invalidUploadJobState = { ...createValidUploadJobState(), status: undefined }
    const [error, result] = validate(invalidUploadJobState, UploadJobState, { coerce: true })
    expect(error).toBeDefined()
    expect(result).toBeUndefined()
  })

  test('Failure: UploadJobState - Invalid status value', () => {
    const invalidUploadJobState = { ...createValidUploadJobState(), status: 'INVALID' }
    const [error, result] = validate(invalidUploadJobState, UploadJobState, { coerce: true })
    expect(error).toBeDefined()
    expect(result).toBeUndefined()
  })

  test('Failure: UploadJobState - Invalid states value', () => {
    const invalidUploadJobState = {
      ...createValidUploadJobState(),
      states: [
        {
          index: 0,
          status: 'INVALID'
        }
      ]
    }
    const [error, result] = validate(invalidUploadJobState, UploadJobState, { coerce: true })
    expect(error).toBeDefined()
    expect(result).toBeUndefined()
  })
})

const { Group } = require('../../../../structures/address-book/v3/group')
const { assert, is } = require('superstruct')

const createValidGroup = () => ({
  id: 'group-1',
  members: ['member-1', 'member-2'],
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
})

const createInvalidGroup = () => ({
  ...createValidGroup(),
  members: 'invalid'
})

describe('Group Structure', () => {
  test('Success: Group', () => {
    const validGroup = createValidGroup()
    expect(() => assert(validGroup, Group)).not.toThrow()
    expect(is(validGroup, Group)).toBe(true)
  })

  test('Failure: Group - Missing required field', () => {
    const invalidGroup = { ...createValidGroup(), id: undefined }
    expect(() => assert(invalidGroup, Group)).toThrow()
    expect(is(invalidGroup, Group)).toBe(false)
  })

  test('Failure: Group - Invalid members', () => {
    const invalidGroup = createInvalidGroup()
    expect(() => assert(invalidGroup, Group)).toThrow()
    expect(is(invalidGroup, Group)).toBe(false)
  })

  test('Failure: Group - Missing created_at', () => {
    const invalidGroup = { ...createValidGroup(), created_at: undefined }
    expect(() => assert(invalidGroup, Group)).toThrow()
    expect(is(invalidGroup, Group)).toBe(false)
  })

  test('Failure: Group - Missing updated_at', () => {
    const invalidGroup = { ...createValidGroup(), updated_at: undefined }
    expect(() => assert(invalidGroup, Group)).toThrow()
    expect(is(invalidGroup, Group)).toBe(false)
  })
})

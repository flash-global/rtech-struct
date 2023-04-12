const { InputGroup } = require('../../../../structures/address-book/v3/inputGroup');
const { assert, is } = require('superstruct');

const createValidInputGroup = () => ({
  id: 'group-1',
  members: ['member-1', 'member-2'],
});

describe('InputGroup Structure', () => {
  test('Success: InputGroup', () => {
    const validInputGroup = createValidInputGroup();
    expect(() => assert(validInputGroup, InputGroup)).not.toThrow();
    expect(is(validInputGroup, InputGroup)).toBe(true);
  });

  test('Failure: InputGroup - Missing required field', () => {
    const invalidInputGroup = { ...createValidInputGroup(), id: undefined };
    expect(() => assert(invalidInputGroup, InputGroup)).toThrow();
    expect(is(invalidInputGroup, InputGroup)).toBe(false);
  });

  test('Failure: InputGroup - Empty member string', () => {
    const invalidInputGroup = { ...createValidInputGroup(), members: ['member-1', ''] };
    expect(() => assert(invalidInputGroup, InputGroup)).toThrow();
    expect(is(invalidInputGroup, InputGroup)).toBe(false);
  });

  test('Success: InputGroup - Members array is empty', () => {
    const validInputGroup = { ...createValidInputGroup(), members: [] };
    expect(() => assert(validInputGroup, InputGroup)).not.toThrow();
    expect(is(validInputGroup, InputGroup)).toBe(true);
  });
});

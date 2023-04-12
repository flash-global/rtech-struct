const { InputAddress } = require('../../../../structures/address-book/v3/inputAddress');
const { validate } = require('superstruct');

const createValidInputAddress = () => ({
  street: '123 Main St',
  city: 'New York',
  country: 'US',
  position: {
    lat: 40.7128,
    lon: -74.0060,
  },
  timezone: 'America/New_York',
});

describe('InputAddress Structure', () => {
  test('Success: InputAddress', () => {
    const validInputAddress = createValidInputAddress();
    const [error, result] = validate(validInputAddress, InputAddress, { coerce: true });
    expect(error).toBeUndefined();
    expect(result).toBeDefined();
    expect(result.id).toBeDefined();
  });

  test('Failure: InputAddress - Uncoerced', () => {
    const validInputAddress = createValidInputAddress();
    const [error, result] = validate(validInputAddress, InputAddress, { coerce: false });
    expect(error).toBeDefined();
    expect(result).toBeUndefined();
  });

  test('Failure: InputAddress - Missing required field', () => {
    const invalidInputAddress = { ...createValidInputAddress(), street: undefined };
    const [error, result] = validate(invalidInputAddress, InputAddress, { coerce: true });
    expect(error).toBeDefined();
    expect(result).toBeUndefined();
  });

  test('Failure: InputAddress - Invalid position', () => {
    const invalidInputAddress = { ...createValidInputAddress(), position: 'invalid' };
    const [error, result] = validate(invalidInputAddress, InputAddress, { coerce: true });
    expect(error).toBeDefined();
    expect(result).toBeUndefined();
  });

  test('Failure: InputAddress - Missing timezone', () => {
    const invalidInputAddress = { ...createValidInputAddress(), timezone: undefined };
    const [error, result] = validate(invalidInputAddress, InputAddress, { coerce: true });
    expect(error).toBeDefined();
    expect(result).toBeUndefined();
  });
});

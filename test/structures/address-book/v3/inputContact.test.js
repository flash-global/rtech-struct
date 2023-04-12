const { InputContact } = require('../../../../structures/address-book/v3/inputContact');
const { validate } = require('superstruct');

const createValidInputContact = () => ({
  company: 'Example Company',
  phone_number: '123-456-7890',
  email: 'john.doe@example.com',
  name: 'John Doe',
});

describe('InputContact Structure', () => {
  test('Success: InputContact', () => {
    const validInputContact = createValidInputContact();
    const [error, result] = validate(validInputContact, InputContact, { coerce: true });
    expect(error).toBeUndefined();
    expect(result).toBeDefined();
    expect(result.id).toBeDefined();
  });

  test('Failure: InputAddress - Uncoerced', () => {
    const validInputContact = createValidInputContact();
    const [error, result] = validate(validInputContact, InputContact, { coerce: false });
    expect(error).toBeDefined();
    expect(result).toBeUndefined();
  });

  test('Failure: InputContact - Invalid email', () => {
    const invalidInputContact = { ...createValidInputContact(), email: 'invalid_email' };
    const [error, result] = validate(invalidInputContact, InputContact, { coerce: true });
    expect(error).toBeDefined();
    expect(result).toBeUndefined();
  });
});

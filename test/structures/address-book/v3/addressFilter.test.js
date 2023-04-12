const { AddressFilter } = require('../../../../structures/address-book/v3/addressFilter');
const { assert, is } = require('superstruct');

const createValidAddressFilter = () => ({
  name: 'QUERY',
  value: 'New York',
});

const createInvalidAddressFilter = () => ({
  name: 'INVALID',
  value: 'New York',
});

describe('AddressFilter Structure', () => {
  test('Success: AddressFilter', () => {
    const validAddressFilter = createValidAddressFilter();
    expect(() => assert(validAddressFilter, AddressFilter)).not.toThrow();
    expect(is(validAddressFilter, AddressFilter)).toBe(true);
  });

  test('Failure: AddressFilter - Invalid name', () => {
    const invalidAddressFilter = createInvalidAddressFilter();
    expect(() => assert(invalidAddressFilter, AddressFilter)).toThrow();
    expect(is(invalidAddressFilter, AddressFilter)).toBe(false);
  });

  test('Failure: AddressFilter - Missing value', () => {
    const invalidAddressFilter = { ...createValidAddressFilter(), value: undefined };
    expect(() => assert(invalidAddressFilter, AddressFilter)).toThrow();
    expect(is(invalidAddressFilter, AddressFilter)).toBe(false);
  });

  test('Failure: AddressFilter - Empty value', () => {
    const invalidAddressFilter = { ...createValidAddressFilter(), value: '' };
    expect(() => assert(invalidAddressFilter, AddressFilter)).toThrow();
    expect(is(invalidAddressFilter, AddressFilter)).toBe(false);
  });
});

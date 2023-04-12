const { AdminAddressFilter } = require('../../../../structures/address-book/v3/adminAddressFilter');
const { assert, is } = require('superstruct');

const createValidAdminAddressFilter = () => ({
  name: 'GROUP',
  value: 'Group Name',
});

const createInvalidAdminAddressFilter = () => ({
  name: 'INVALID',
  value: 'Group Name',
});

describe('AdminAddressFilter Structure', () => {
  test('Success: AdminAddressFilter', () => {
    const validAdminAddressFilter = createValidAdminAddressFilter();
    expect(() => assert(validAdminAddressFilter, AdminAddressFilter)).not.toThrow();
    expect(is(validAdminAddressFilter, AdminAddressFilter)).toBe(true);
  });

  test('Failure: AdminAddressFilter - Invalid name', () => {
    const invalidAdminAddressFilter = createInvalidAdminAddressFilter();
    expect(() => assert(invalidAdminAddressFilter, AdminAddressFilter)).toThrow();
    expect(is(invalidAdminAddressFilter, AdminAddressFilter)).toBe(false);
  });

  test('Failure: AdminAddressFilter - Missing value', () => {
    const invalidAdminAddressFilter = { ...createValidAdminAddressFilter(), value: undefined };
    expect(() => assert(invalidAdminAddressFilter, AdminAddressFilter)).toThrow();
    expect(is(invalidAdminAddressFilter, AdminAddressFilter)).toBe(false);
  });

  test('Failure: AdminAddressFilter - Empty value', () => {
    const invalidAdminAddressFilter = { ...createValidAdminAddressFilter(), value: '' };
    expect(() => assert(invalidAdminAddressFilter, AdminAddressFilter)).toThrow();
    expect(is(invalidAdminAddressFilter, AdminAddressFilter)).toBe(false);
  });
});

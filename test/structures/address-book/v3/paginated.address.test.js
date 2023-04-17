const { PaginatedAddress } = require('../../../../structures/address-book/v3/paginatedAddress');
const { assert, is } = require('superstruct');
const { v4: uuidV4 } = require('uuid');

const createValidAddress = () => ({
  id: uuidV4(),
  street: '123 Main St',
  city: 'New York',
  country: 'US',
  position: {
    lat: 40.7128,
    lon: -74.0060,
  },
  timezone: 'America/New_York',
  contacts: [],
  scores: [],
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
});

const createValidPaginatedAddress = () => ({
  current_page: 1,
  total_pages: 10,
  addresses: [createValidAddress(), createValidAddress()],
});

describe('PaginatedAddress Structure', () => {
  test('Success: PaginatedAddress', () => {
    const validPaginatedAddress = createValidPaginatedAddress();
    expect(() => assert(validPaginatedAddress, PaginatedAddress)).not.toThrow();
    expect(is(validPaginatedAddress, PaginatedAddress)).toBe(true);
  });

  test('Failure: PaginatedAddress - Missing required field', () => {
    const invalidPaginatedAddress = { ...createValidPaginatedAddress(), current_page: undefined };
    expect(() => assert(invalidPaginatedAddress, PaginatedAddress)).toThrow();
    expect(is(invalidPaginatedAddress, PaginatedAddress)).toBe(false);
  });

  test('Failure: PaginatedAddress - Invalid addresses value', () => {
    const invalidPaginatedAddress = {
      ...createValidPaginatedAddress(),
      addresses: [{ ...createValidAddress(), street: undefined }],
    };
    expect(() => assert(invalidPaginatedAddress, PaginatedAddress)).toThrow();
    expect(is(invalidPaginatedAddress, PaginatedAddress)).toBe(false);
  });
});

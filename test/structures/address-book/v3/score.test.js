const { Score } = require('../../../../structures/address-book/v3/score');
const { validate } = require('superstruct');

const createValidScore = () => ({
  value: 5,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
});

describe('Score Structure', () => {
  test('Success: Score', () => {
    const validScore = createValidScore();
    const [error, result] = validate(validScore, Score, { coerce: true });
    expect(error).toBeUndefined();
    expect(result).toBeDefined();
    expect(result.id).toBeDefined();
  });

  test('Failure: Score - Uncoerced', () => {
    const validScore = createValidScore();
    const [error, result] = validate(validScore, Score, { coerce: false });
    expect(error).toBeDefined();
    expect(result).toBeUndefined();
  });

  test('Success: Score - Negative value', () => {
    const validScore = { ...createValidScore(), value: -1 };
    const [error, result] = validate(validScore, Score, { coerce: true });
    expect(error).toBeUndefined();
    expect(result).toBeDefined();
    expect(result.id).toBeDefined();
  });

  test('Failure: Score - Missing required field', () => {
    const invalidScore = { ...createValidScore(), value: undefined };
    const [error, result] = validate(invalidScore, Score, { coerce: true });
    expect(error).toBeDefined();
    expect(result).toBeUndefined();
  });

  test('Failure: Score - Non-integer value', () => {
    const invalidScore = { ...createValidScore(), value: 3.5 };
    const [error, result] = validate(invalidScore, Score, { coerce: true });
    expect(error).toBeDefined();
    expect(result).toBeUndefined();
  });
});

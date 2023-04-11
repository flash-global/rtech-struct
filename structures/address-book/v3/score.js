const { defaulted, integer, object, string } = require('superstruct');
const { v4 } = require('uuid');
const IsoDate = require('../../lib').isodate();

const Score = object({
  id: defaulted(string(), () => v4()),
  value: integer(),
  created_at: IsoDate,
  updated_at: IsoDate
});

module.exports = { Score }

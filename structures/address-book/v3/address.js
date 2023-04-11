const { array, defaulted, object, optional, size, string } = require('superstruct');
const { v4 } = require('uuid');
const { Timezone } = require('../../lib');
const Contact = require('./contact');
const Position = require('./position');
const Score = require('./score');
const IsoDate = require('../../lib').isodate();

const Address = object({
  id: defaulted(string(), () => v4()),
  alias: optional(size(string(), 1, 64)),
  street: size(string(), 1, 128),
  additional_street: optional(size(string(), 1, 128)),
  city: size(string(), 1, 64),
  zip_code: optional(size(string(), 2, 32)),
  province: optional(size(string(), 1, 128)),
  country: size(string(), 2, 2),
  position: Position,
  timezone: Timezone,
  contacts: array(Contact),
  scores: array(Score),
  created_at: IsoDate,
  updated_at: IsoDate
});

module.exports = { Address }

const { array, defaulted, integer, literal, object, optional, size, string } = require('superstruct');
const IsoDate = require('../../lib').isodate();

const State = object({
  index: integer(),
  status: literal('SUCCESS', 'DONE'),
  error: optional(size(string(), 1, Infinity))
});

const UploadJobState = object({
  id: defaulted(string(), () => v4()),
  status: literal('PENDING', 'DONE'),
  states: array(State),
  created_at: IsoDate,
  updated_at: IsoDate
});

module.exports = { UploadJobState }

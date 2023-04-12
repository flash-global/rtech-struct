const { array, defaulted, enums, integer, object, optional, size, string } = require('superstruct');
const { v4: uuidV4 } = require('uuid');
const { Uuid } = require('../../lib');
const IsoDate = require('../../lib').isodate();

const State = object({
  index: integer(),
  status: enums(['SUCCESS', 'DONE']),
  error: optional(size(string(), 1, Infinity))
});

const UploadJobState = object({
  id: defaulted(Uuid, () => uuidV4()),
  status: enums(['PENDING', 'DONE']),
  states: array(State),
  created_at: IsoDate,
  updated_at: IsoDate
});

module.exports = { UploadJobState }

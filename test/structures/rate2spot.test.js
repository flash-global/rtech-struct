const s = require('superstruct')
const { SQSResponseRate2Spot } = require('../../structures/rate2spotswitch')

describe('validate rate2spot object structure from sqs', () => {
  test('fidelity: all fields accounted for', () => {
    const example1 = {
      id: 'this is an id field',
      namespace: 'this is a namespace field',
      key: 'order key',
      scheduled_at: '30 seconds from now',
      data: {
        key: 'same order key',
        shipperId: 'AgreedPrice',
        agencyId: '80Agency',
        creatorRequestId: 'szaeazeazeazea'
      }
    }
    const [error, data] = s.validate(example1, SQSResponseRate2Spot, { coerce: true, mask: true })
    expect(error).toBeUndefined()
    expect(data).toEqual(example1)
  })
  test('error there is no data property', () => {
    const example1 = {
      id: 'this is an id field',
      namespace: 'this is a namespace field',
      scheduled_at: '30 seconds from now',
      data: {
        key: 'same order key',
        shipperId: 'AgreedPrice',
        creatorRequestId: 'szaeazeazeazea'
      }
    }
    const [error, data] = s.validate(example1, SQSResponseRate2Spot, { coerce: true, mask: true })
    expect(data).toBeUndefined()
    const failures = structuredClone(error.failures())
    expect(failures).toEqual([
      {
        type: 'string',
        key: 'key',
        path: ['key'],
        branch: [
          {
            id: 'this is an id field',
            namespace: 'this is a namespace field',
            scheduled_at: '30 seconds from now',
            data: {
              key: 'same order key',
              shipperId: 'AgreedPrice',
              creatorRequestId: 'szaeazeazeazea'
            }
          },
          undefined
        ],
        message: 'Expected a string, but received: undefined'
      },
      {
        value: undefined,
        type: 'string',
        refinement: undefined,
        key: 'agencyId',
        path: ['data', 'agencyId'],
        branch: [
          {
            id: 'this is an id field',
            namespace: 'this is a namespace field',
            scheduled_at: '30 seconds from now',
            data: {
              creatorRequestId: 'szaeazeazeazea',
              key: 'same order key',
              shipperId: 'AgreedPrice'
            }
          },
          {
            key: 'same order key',
            shipperId: 'AgreedPrice',
            creatorRequestId: 'szaeazeazeazea'
          },
          undefined
        ],
        message: 'Expected a string, but received: undefined',
        explanation: undefined
      }
    ])
  })
})

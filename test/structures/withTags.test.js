const s = require('superstruct')
const { withTags } = require('../../structures/withTags')

describe('withTags object structure', () => {
  test('Success: withTags structure', () => {
    expect(s.is({}, withTags())).toBeTruthy()
    expect(s.is({ tags: [] }, withTags())).toBeTruthy()
    expect(s.is({ tags: ['tag-1', 'tag-2'], anotherField: { what: 'ever' } }, withTags())).toBeTruthy()
  })

  test('Fail: withTags structure fail', () => {
    expect(s.is('not an object', withTags())).toBeFalsy()
    expect(s.is({ tags: 'not an array' }, withTags())).toBeFalsy()
    expect(s.is({ tags: ['ok-tag', { tag: 'which is not ok' }] }, withTags())).toBeFalsy()
  })
})

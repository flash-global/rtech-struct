const s = require('superstruct')
const { withTags } = require('../../structures/withTags')

describe('withTags object structure', () => {
  test('Success: withTags structure', () => {
    expect(s.is({}, withTags())).toBeTruthy()
    expect(s.is({ tags: [] }, withTags())).toBeTruthy()
    expect(s.is({ tags: ['tag-1', 'tag-2'] }, withTags({ authorizedTags: ['tag-1', 'tag-2'] }))).toBeTruthy()
    expect(
      s.is({ tags: ['tag-1', 'tag-2'], maxTags: undefined }, withTags({ authorizedTags: ['tag-1', 'tag-2'] }))
    ).toBeTruthy()
    expect(
      s.is(
        { tags: ['tag-1', 'tag-2'], maxTags: undefined },
        withTags({ authorizedTags: ['tag-1', 'tag-2'], maxTags: undefined })
      )
    ).toBeTruthy()
    expect(
      s.is({ tags: ['tag-1', 'tag-2'] }, withTags({ authorizedTags: ['tag-1', 'tag-2'], maxTags: undefined }))
    ).toBeTruthy()
    expect(
      s.is({ tags: ['tag-1', 'tag-2'], maxTags: 3 }, withTags({ authorizedTags: ['tag-1', 'tag-2'], maxTags: 3 }))
    ).toBeTruthy()
  })

  test('Fail: withTags structure fail', () => {
    expect(s.is('not an object', withTags())).toBeFalsy()
    expect(s.is({ tags: 'not an array' }, withTags())).toBeFalsy()
    expect(s.is({ tags: ['ok-tag', { tag: 'which is not ok' }] }, withTags())).toBeFalsy()
    expect(
      s.is({ tags: ['not listed in config'] }, withTags({ authorizedTags: ['these', 'tags', 'are', 'allowed'] }))
    ).toBeFalsy()
    expect(
      s.is({ tags: ['tag-1', 'tag-2', 'tag-3'] }, withTags({ authorizedTags: ['tag-1', 'tag-2'], maxTags: 2 }))
    ).toBeFalsy()
    expect(
      s.is({ tags: ['tag-1', 'tag-2'], maxTags: 'five' }, withTags({ authorizedTags: ['tag-1', 'tag-2'], maxTags: 2 }))
    ).toBeFalsy()
  })
})

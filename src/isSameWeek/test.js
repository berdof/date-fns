// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSameWeek from '.'

describe('isSameWeek', function () {
  it('returns true if the given dates have the same week', function () {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4)
    )
    assert(result === true)
  })

  it('returns false if the given dates have different weeks', function () {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 30),
      new Date(2014, 8 /* Sep */, 4)
    )
    assert(result === false)
  })

  it('allows to specify which day is the first day of the week', function () {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4),
      {weekStartsOn: 1}
    )
    assert(result === false)
  })

  it('implicitly converts options', function () {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4),
      // $ExpectedMistake
      {weekStartsOn: '1'}
    )
    assert(result === false)
  })

  it('accepts a string', function () {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31).toISOString(),
      new Date(2014, 8 /* Sep */, 4).toISOString()
    )
    assert(result === true)
  })

  it('accepts a timestamp', function () {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31).getTime(),
      new Date(2014, 8 /* Sep */, 4).getTime()
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', function () {
    var result = isSameWeek(
      new Date(NaN),
      new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', function () {
    var result = isSameWeek(
      new Date(1987, 1 /* Feb */, 11),
      new Date(NaN)
    )
    assert(result === false)
  })

  it.skip('returns false if `options.weekStartsOn` is NaN', function () {
    var result = isSameWeek(
      new Date(2014, 7 /* Aug */, 31),
      new Date(2014, 8 /* Sep */, 4),
      {weekStartsOn: NaN}
    )
    assert(result === false)
  })
})

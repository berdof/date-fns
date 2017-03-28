// @flow
/* eslint-env mocha */

import assert from 'power-assert'
var locale = require('./')

describe('it locale', function () {
  it('exports distanceInWords object', function () {
    assert(typeof locale.distanceInWords === 'object')
  })

  it('exports format object', function () {
    assert(typeof locale.format === 'object')
  })

  it('exports getTranslation method', function () {
    assert(typeof locale.getTranslation === 'function')
  })
})

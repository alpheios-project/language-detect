/* eslint-env jest */
/* eslint-disable no-unused-vars */

import DetectLanguage from '@/detect-language.js'

describe('detect-language.test.js', () => {
  console.error = function () {}
  console.log = function () {}
  console.warn = function () {}
  
  beforeEach(() => {
    jest.spyOn(console, 'error')
    jest.spyOn(console, 'log')
    jest.spyOn(console, 'warn')
  })
  afterEach(() => {
    jest.resetModules()
  })
  afterAll(() => {
    jest.clearAllMocks()
  })
  
  it('1 DetectLanguage - init', () => {
    DetectLanguage.init()
  })
})

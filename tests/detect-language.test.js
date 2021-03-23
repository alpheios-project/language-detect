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

  it('1 DetectLanguage - check greek', () => {
    const testStr = 'τά ταῖν ταῖν τοῦ εγώ εμένα ἐμαυτοῦ ταύταις ένα δύο τρία όμορφος νέος γλυκός συνεχής πλατύς οξύς ἄνδρα μοι ἔννεπε, μοῦσα, πολύτροπον πρόσφυμα ξηρή σκληρή ζώνη ινώδους συνδετικού ιστού που συνδέει συνήθως μύες με οστά ἥρωϊ Δαναὸς ἀφίκτωρ λεπτοψαμάθων'
    expect(DetectLanguage.detect(testStr)).toEqual('grc')
  })

  it('2 DetectLanguage - check Persian', () => {
    const testStr = 'بادائیدنبه نام خداوند جان و خرد کزین برتر اندیشه برنگذر'
    expect(DetectLanguage.detect(testStr)).toEqual('per')
  })

  it('3 DetectLanguage - check arabic', () => {
    const testStr = 'اَلدٌّنيَا دَارُ مَمَرٍ لاَ دَارُ مَقَرٍ * سُلطَان بِلاَ عَدلٍ كَنَهرٍ'
    expect(DetectLanguage.detect(testStr)).toEqual('ara')
  })

  it('4 DetectLanguage - check latin', () => {
    const testStr = 'fero ferre tuli latus ferant'
    expect(DetectLanguage.detect(testStr)).toEqual('lat')
  })

  it('5 DetectLanguage - check geez', () => {
    const testStr = 'ይትባረክ፡ እግዚአብሔር፡ አምላከ፡ እስራኤል፡ አምላክ፡ ለኵሉ፡ መንፈስ፡ ወለኵሉ፡ ዘሥጋ፡ ወይቤሎ፡ እግዚአብሔር፡ ለእዝራ፡ አእምር፡ ወጠይቅ፡'
    expect(DetectLanguage.detect(testStr)).toEqual('gez')
  })

  it('6 DetectLanguage - check chinese', () => {
    const testStr = '天地玄黃，宇宙洪荒。日月盈昃，辰宿列張。寒來暑往，秋收冬藏。閏余成歲，律呂調陽。子曰學'
    expect(DetectLanguage.detect(testStr)).toEqual('zho')
  })

  it('7 DetectLanguage - check syriac', () => {
    const testStr = 'ܥܲܠ ܟܵܘܟ݁ܒ̣ܵܐ ܗܵܘ̇ ܕܐܸܬܼܚܙܝܼ ܠܲܡܓ̣ܘܼ̈ܫܹܐ'
    expect(DetectLanguage.detect(testStr)).toEqual('syr')
  })
  
  it('7 DetectLanguage - check default', () => {
    const testStr ='texto de prueba'
    expect(DetectLanguage.detect(testStr)).toEqual('lat')
  })
})

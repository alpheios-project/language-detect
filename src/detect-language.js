export default class DetectLanguage {
  static get langs () {
    return {
      grc: { regex: /^[\u0374-\u03FB ]|[\u1F00-\u1FFE]+$/u, langCode: 'grc' },
      gez: { regex: /^[\u1200-\u137C ]+$/u, langCode: 'gez' },
      zho: { regex: /^[\u4E00-\u4EFF ]|[\u5000-\u5FFF]|[\u6000-\u6FFF]|[\u7000-\u7FFF]|[\u8000-\u8FFF]|[\u9000-\u9FFF]+$/u, langCode: 'zho' },
      syr: { regex: /^[\u0700-\u074F ]|[\u0860-\u086A]+$/u, langCode: 'syr' },
      per: { regex: /^[\u0621-\u06CC ]+$/u, langCode: 'per' },
      ara: { regex: /^[\u0600-\u06FF ]|[\u0750-\u077F]|[\u08A0-\u08FF]|[\uFB50-\uFDFF]+$/u, langCode: 'ara' },
      lat: { regex: /^[A-Za-z ]+$/, langCode: 'lat' }
    }
  }

  static get defaultLangCode () {
    return 'lat'
  }

  static detect (text) {
    let langRes
    for (let i = 0; i < Object.values(this.langs).length; i++) {
      const langData = Object.values(this.langs)[i]

      if (langData.regex.test(text)) {
        langRes = langData.langCode
        break
      }
    }
    return langRes || this.defaultLangCode
  }
}

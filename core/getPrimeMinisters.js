const global = require('../helpers/global')
const { LANGUAGES } = require('../helpers/constants')

module.exports = () => {
  let primeMinistersList

  switch (global.getDefaultLanguage()) {
    case LANGUAGES.ENGLISH:
    case LANGUAGES.MALAY:
      primeMinistersList = {
        prime_ministers: [
          'Tunku Abdul Rahman Putra Al-Haj ibni Almarhum Sultan Abdul Hamid Halim Shah',
          'Tun Haji Abdul Razak bin Dato\' Hussein',
          'Tun Hussein bin Dato\' Onn',
          'Mahathir bin Mohamad',
          'Abdullah bin Haji Ahmad Badawi',
          'Mohammad Najib bin Tun Haji Abdul Razak',
          'Mahathir bin Mohamad',
          'Muhyiddin bin Haji Muhammad Yassin'
        ]
      }
      break
    case LANGUAGES.CHINESE:
      primeMinistersList = {
        prime_ministers: [
          '东古·阿卜杜勒·拉赫曼',
          '阿卜杜勒·拉扎克·侯赛因',
          '侯赛因·奥恩',
          '马哈蒂尔·穆罕默德',
          '阿卜杜拉·巴达维',
          '纳吉布·阿卜杜勒·拉扎克',
          '马哈蒂尔·穆罕默德',
          '穆希丁·雅辛'
        ]
      }
      break
    default:
      break
  }

  return primeMinistersList
}

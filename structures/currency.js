const s = require('superstruct')
const { code, codes } = require('currency-codes')

const Currency = s.define('Currency', (value) => {
  if (value == null || typeof value !== 'string') {
    return false
  }
  return code(value) != null
})

const getCurrencyInfo = (currencyCode) => {
  return code(currencyCode)
}

const getAllCurrencies = () => {
  return codes()
}

module.exports = {
  Currency: Currency,
  getCurrencyInfo: getCurrencyInfo,
  getAllCurrencies: getAllCurrencies
}

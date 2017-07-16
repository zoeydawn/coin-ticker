const axios = require('axios')

module.exports = (pair) => {
  const currencyPair = pair.replace('_', '').toLowerCase()

  return axios.get(`https://yunbi.com/api/v2/tickers/${currencyPair}`)
    .then( response => {
      let { data } = response
      let { at, ticker: { buy, sell, low, high, last, vol }} = data
      return {
        last,
        ask: sell,
        bid: buy,
        low,
        high,
        vol,
        timestamp: at,
        exchange: 'yunbi',
        pair: pair,

        rawData: data
      }
    })
    .catch((err) => {
      return 'invalid currency pair'
    })
}

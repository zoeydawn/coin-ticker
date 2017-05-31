const axios = require('axios')

module.exports = (pair) => {
  const currencyPair = pair.toLowerCase()
  return axios.get(`https://btc-e.com/api/3/ticker/${currencyPair}`)
    .then((res) => {
      const { buy, sell, last, low, high, vol, updated } = res.data[currencyPair]

      return {
        last: last.toString(),
        ask: buy.toString(),
        bid: sell.toString(),
        low: low.toString(),
        high: high.toString(),
        vol: vol.toString(),
        timestamp: updated.toString(),
        exchange: 'btce',
        pair
      }
    })

}

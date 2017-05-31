const axios = require('axios')

module.exports = (pair) => {
  return axios.get('https://poloniex.com/public?command=returnTicker')
    .then((res) => {
      const { last, lowestAsk, highestBid, percentChange, baseVolume, high24hr, low24hr } = res.data[pair]

      return {
        last,
        ask: lowestAsk,
        bid: highestBid,
        low: low24hr,
        high: high24hr,
        vol: baseVolume,
        timestamp: Date.now() / 1000,
        exchange: 'poloniex',
        pair
      }
    })
}

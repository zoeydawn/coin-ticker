const axios = require('axios');

module.exports = (pair) => {
  const currencyPair = pair.replace('_', '-');

  return axios.get(`https://api.gdax.com/products/${currencyPair}/ticker`)
  .then( tickerResponse => {
    return axios.get(`https://api.gdax.com/products/${currencyPair}/stats`)
    .then( statsResponse => {
      const raw = Object.assign({}, tickerResponse.data, statsResponse.data)
      const { price, size, bid, ask, time, high, low, volume } = raw
      const timestamp = new Date(time).getTime()

      return {
        last: price,
        ask,
        bid,
        low,
        high,
        vol: volume,
        timestamp,
        exchange: 'gdax',
        pair,
        rawData: raw,
      }
    })
  })
  .catch((err) => {
    return 'invalid currency pair';
  });
}

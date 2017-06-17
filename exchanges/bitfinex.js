const axios = require('axios');

module.exports = (pair) => {
  const currencyPair = pair.replace('_', '');
  return axios.get(`https://api.bitfinex.com/v1/pubticker/${currencyPair}`)
    .then((res) => {
      const { ask, bid, last_price, low, high, volume, timestamp, message } = res.data;

      return {
        last: last_price,
        ask,
        bid,
        low,
        high,
        vol: volume,
        timestamp,
        exchange: 'bitfinex',
        pair,
        rawData: res.data,
      };
    })
    .catch((err) => {
      return 'invalid currency pair';
    });
}

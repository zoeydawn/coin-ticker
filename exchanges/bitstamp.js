const axios = require('axios');

module.exports = (pair) => {
  const currencyPair = pair.replace('_', '').toLowerCase();
  return axios.get(`https://www.bitstamp.net/api/v2/ticker/${currencyPair}`)
    .then((res) => {
      const { bid, ask, last, low, high, volume, timestamp } = res.data;
      return {
        last,
        ask,
        bid,
        low,
        high,
        vol: volume,
        timestamp,
        exchange: 'bitstamp',
        pair,
        rawData: res.data,
      };
    })
    .catch((err) => {
      return 'invalid currency pair';
    });
}

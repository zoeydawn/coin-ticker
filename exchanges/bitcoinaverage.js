const axios = require('axios');

module.exports = (pair) => {
  const currencyPair = pair.replace('_', '');
  return axios.get(`https://apiv2.bitcoinaverage.com/indices/global/ticker/${currencyPair}`)
    .then((res) => {
      const { bid, ask, last, low, high, timestamp } = res.data;
      return {
        last: last.toString(),
        ask: ask.toString(),
        bid: bid.toString(),
        low: low.toString(),
        high: high.toString(),
        vol: 'N/A',
        timestamp,
        exchange: 'bitcoinaverage',
        pair,
        rawData: res.data,
      };
    })
    .catch((err) => {
      return 'invalid currency pair';
    });
}

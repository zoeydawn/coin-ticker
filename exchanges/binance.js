const axios = require('axios');

module.exports = (pair) => {
  const currencyPair = pair.replace('_', '');
  return axios.get(`https://api.binance.com/api/v1/ticker/24hr?symbol=${currencyPair}`)
    .then((res) => {
      const { askPrice, bidPrice, lastPrice, lowPrice, highPrice, volume, timestamp, message } = res.data;

      return {
        last: lastPrice,
        ask: askPrice,
        bid: bidPrice,
        low: lowPrice,
        high: highPrice,
        vol: volume,
        timestamp: (new Date()).getTime(),
        exchange: 'binance',
        pair,
        rawData: res.data,
      };
    })
    .catch((err) => {
      return 'invalid currency pair';
    });
}

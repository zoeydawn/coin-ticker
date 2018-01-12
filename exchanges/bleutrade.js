const axios = require('axios');

module.exports = (pair) => {
  return axios.get(`https://bleutrade.com/api/v2/public/getticker?market=${currencyPair}`)
    .then((res) => {
      if (res.data.success === 'false') {
        return 'invalid currency pair';
      }

      const { ask, bid, last_price, low, high, volume, timestamp, message } = res.data.result;

      return {
        last: last_price,
        ask,
        bid,
        low,
        high,
        vol: volume,
        timestamp,
        exchange: 'bleutrade',
        pair,
        rawData: res.data,
      };
    })
    .catch((err) => {
      return 'invalid currency pair';
    });
}

const axios = require('axios')

module.exports = (pair) => {
  return axios.get(`https://www.okcoin.com/api/v1/ticker.do?symbol=${pair}`)
    .then((res) => {
      const { date, ticker } = res.data
      const { sell, buy, last, low, high, vol } = ticker
      return {
        last,
        ask: buy,
        bid: sell,
        low,
        high,
        vol,
        timestamp: date,
        exchange: 'okcoin',
        pair,
        rawData: res.data,
      };
    });

}

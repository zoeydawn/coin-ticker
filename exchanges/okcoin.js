const axios = require('axios');

module.exports = (currencyPair) => {
  const pair = currencyPair.toLowerCase();
  return axios.get(`https://www.okcoin.com/api/v1/ticker.do?symbol=${pair}`)
    .then((res) => {
      if (pair !== 'btc_usd' && pair !== 'ltc_usd' && pair !== 'eth_usd') {
        return 'invalid currency pair';
      }
      const { date, ticker } = res.data;
      const { sell, buy, last, low, high, vol } = ticker;
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
    })
    .catch(err => console.error('bittrex api error:', err));
}

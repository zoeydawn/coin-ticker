const axios = require('axios');

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

module.exports = (pair) => {
  const currencyPair = pair.replace(/_/, '-').toLowerCase();
  return axios.get(`https://www.surbtc.com/api/v2/markets/${currencyPair}/ticker`, { headers })
    .then((res) => {
      const data = res.data.ticker;
      return {
        last: data.last_price[0].toString(),
        ask: data.min_ask[0].toString(),
        bid: data.max_bid[0].toString(),
        low: 'not provided',
        high: 'not provided',
        vol: data.volume[0].toString(),
        timestamp: Date.now() / 1000,
        exchange: 'surbtc',
        pair,
        rawData: data,
      };
    })
    .catch(err => console.error('surbtc api error:', err));
};

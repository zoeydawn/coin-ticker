const axios = require('axios');

module.exports = (pair) => {
  let currencyPair = pair.replace(/^(.+)_(.+)$/,'$2-$1');

  return axios.get(`https://bittrex.com/api/v1.1/public/getmarketsummary?market=${currencyPair}`)
    .then((res) => {
      if (res.data.message === 'INVALID_MARKET') {
        return 'invalid currency pair';
      }
      const { Last, Ask, Bid, Volume, High, Low } = res.data.result[0];
      return {
        last: Last.toString(),
        ask: Ask.toString(),
        bid: Bid.toString(),
        low: Low.toString(),
        high: High.toString(),
        vol: Volume.toString(),
        timestamp: Date.now() / 1000,
        exchange: 'bittrex',
        pair,
        rawData: res.data.result[0],
      };
    })
    .catch(err => console.error('bittrex api error:', err));
}

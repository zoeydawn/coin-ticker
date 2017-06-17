const axios = require('axios');

module.exports = (currencyPair) => {
  const pairArr = currencyPair.split('_');
  const asset1 = pairArr[1] === 'USD' ? 'USDT' : pairArr[1];
  const asset2 = pairArr[0] === 'USD' ? 'USDT' : pairArr[0];

  const pair = asset1 + '_' + asset2;
  return axios.get('https://poloniex.com/public?command=returnTicker')
    .then((res) => {
      if (!res.data[pair]) {
        return 'invalid currency pair';
      }
      const { last, lowestAsk, highestBid, percentChange, baseVolume, high24hr, low24hr } = res.data[pair];
      return {
        last,
        ask: lowestAsk,
        bid: highestBid,
        low: low24hr,
        high: high24hr,
        vol: baseVolume,
        timestamp: Date.now() / 1000,
        exchange: 'poloniex',
        pair,
        rawData: res.data[pair],
      };
    })
  .catch(err => console.error('poloniex error:', err));
}

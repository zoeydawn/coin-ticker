const axios = require('axios');

module.exports = (currencyPair) => {
  console.log('in poloniex');
  const pairArr = currencyPair.split('_');
  const pair = pairArr[1] + '_' + pairArr[0];
  return axios.get('https://poloniex.com/public?command=returnTicker')
    .then((res) => {
      console.log('res.data:', res.data);
      console.log('res.data[pair]:', res.data[pair]);
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

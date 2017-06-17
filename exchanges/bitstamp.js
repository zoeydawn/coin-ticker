const axios = require('axios');

function bitstamp(pair) {
  const availablePairs = [
    'btceur',
    'eurusd',
    'xrpusd',
    'xrpeur',
  ];
  const currencyPair = availablePairs.includes(pair) ? pair : 'btcusd';

  return axios.get(`https://www.bitstamp.net/api/v2/ticker/${currencyPair}`)
    .then((res) => {
      const { bid, ask, last, low, high, volume, timestamp } = res.data;
      // console.log('res.data:', res.data);
      return {
        last,
        ask,
        bid,
        low,
        high,
        vol: volume,
        timestamp,
        exchange: 'bitstamp',
        pair: currencyPair,
        rawData: res.data,
      };
    });

}

module.exports = bitstamp;

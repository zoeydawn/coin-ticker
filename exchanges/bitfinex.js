const axios = require('axios');

function bitfinex(pair) {
  const availablePairs = [
    'ltcusd',
    'ltcbtc',
    'ethusd',
    'ethbtc',
    'etcbtc',
    'etcusd',
    'rrtusd',
    'rrtbtc',
    'zecusd',
    'zecbtc',
  ];
  const currencyPair = availablePairs.includes(pair) ? pair : 'btcusd';

  return axios.get(`https://api.bitfinex.com/v1/pubticker/${currencyPair}`)
    .then((res) => {
      const { ask, bid, last_price, low, high, volume, timestamp } = res.data;
      // console.log('res.data:', res.data);
      return {
        last: last_price,
        ask,
        bid,
        low,
        high,
        vol: volume,
        timestamp,
        exchange: 'bitfinex',
        pair: currencyPair,
      };
    });

}

module.exports = bitfinex;

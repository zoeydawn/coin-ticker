const axios = require('axios');

function kraken(pair) {
  const availablePairs = {
    etcbtc: 'XETCXXBT',
    etceur: 'XETCZEUR',
    etcusd: 'XETCZUSD',
    ethbtc: 'XETHXXBT',
    ethcad: 'XETHZCAD',
    etheur: 'XETHZEUR',
    ethgbp: 'XETHZGBP',
    ethjpy: 'XETHZJPY',
    ethusd: 'XETHZUSD',
    ltcbtc: 'XLTCXXBT',
    ltceur: 'XLTCZEUR',
    ltcusd: 'XLTCZUSD',
    btccad: 'XXBTZCAD',
    btceur: 'XXBTZEUR',
    btcgbp: 'XXBTZGBP',
    btcjpy: 'XXBTZJPY',
    btcusd: 'XXBTZUSD',
  };
  const currencyPair = Object.keys(availablePairs).includes(pair) ? pair : 'btcusd';
  const specifiedPair = availablePairs[currencyPair];

  return axios.get(`https://api.kraken.com/0/public/Ticker?pair=${specifiedPair}`)
    .then((res) => {
      const { a, b, c, v, l, h } = res.data.result[specifiedPair];
      // console.log('res.data:', res.data);
      return {
        ask: a[0],
        bid: b[0],
        last: c[0],
        vol: v[1],
        low: l[1],
        high: h[1],
        timestamp: Date.now() / 1000,
        exchange: 'kraken',
        pair: currencyPair,
      };
    });

}

module.exports = kraken;

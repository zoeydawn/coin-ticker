const axios = require('axios');

module.exports = (pair) => {
  const assetAlts = {
    'BTC': 'XBT',
    'BTC.d': 'XBT.d',
  }
  const [first, second] = pair.split('_');
  const currencyPair = `${(assetAlts[first] || first)}${(assetAlts[second] || second)}`;

  return axios.get(`https://api.kraken.com/0/public/Ticker?pair=${currencyPair}`)
    .then((res) => {
      const data = res.data.result
      const { a, b, c, v, l, h } = data[Object.keys(data)[0]];
      return {
        ask: a[0],
        bid: b[0],
        last: c[0],
        vol: v[1],
        low: l[1],
        high: h[1],
        timestamp: Date.now() / 1000,
        exchange: 'kraken',
        pair,
        rawData: data,
      };
    });

}

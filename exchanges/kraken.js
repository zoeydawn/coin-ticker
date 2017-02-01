const axios = require('axios');

function kraken(pair) {

  return axios.get('https://api.kraken.com/0/public/Ticker?pair=XXBTZUSD')
    .then((res) => {
      const { a, b, c, v, l, h } = res.data.result.XXBTZUSD;
      // console.log('res.data:', res.data);
      return {
        ask: a[0],
        bid: b[0],
        last: c[0],
        vol: v[1],
        low: l[1],
        high: h[1],
        timestamp: null,
        exchange: 'Kraken',
        pair: 'BTC/USD',
      };
    });

}

module.exports = kraken;

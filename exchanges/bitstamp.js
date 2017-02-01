const axios = require('axios');

function bitstamp(pair) {

  return axios.get('https://www.bitstamp.net/api/ticker_hour/')
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
        exchange: 'Bitstamp',
        pair: 'BTC/USD',
      };
    });

}

module.exports = bitstamp;

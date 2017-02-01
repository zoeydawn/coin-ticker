const axios = require('axios');

function bitfinex(pair) {

  return axios.get('https://api.bitfinex.com/v1/pubticker/BTCUSD')
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
        exchange: 'Bitfinex',
        pair: 'BTC/USD',
      };
    });
    
}

module.exports = bitfinex;

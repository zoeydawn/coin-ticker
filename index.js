const axios = require('axios');

function coinTicker(exchange, pair) {
  let payload;
  switch (exchange) {
    case 'bitfinex':
    return axios.get('https://api.bitfinex.com/v1/pubticker/BTCUSD')
      .then((res) => {
        const { ask, bid, last_price, low, high, volume, timestamp, mid } = res.data;
        console.log('res.data:', res.data);
        return {
          last: last_price,
          ask,
          bid,
          low,
          high,
          vol: volume,
          timestamp,
          mid,
        };
      });
      break;
    default:
      return "Unrecognized exchange"
  }
  // return payload;
}

// console.log(coinTicker('bitfinex'));

module.exports = coinTicker;

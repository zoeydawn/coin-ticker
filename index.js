const axios = require('axios');

function coinTicker(exchange, pair) {
  switch (exchange) {
    case 'bitfinex':
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
      break;
    case 'btce':
      return axios.get('https://btc-e.com/api/3/ticker/btc_usd')
        .then((res) => {
          const { buy, sell, last, low, high, vol, updated } = res.data.btc_usd;
          // console.log('res.data:', res.data);
          return {
            last: last.toString(),
            ask: buy.toString(),
            bid: sell.toString(),
            low: low.toString(),
            high: high.toString(),
            vol: vol.toString(),
            timestamp: updated.toString(),
            exchange: 'BTC-e',
            pair: 'BTC/USD',
          };
        });
      break;
    case 'bitstamp':
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
      break;
    case 'kraken':
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
      break;
    case 'okcoin':
      return axios.get('https://www.okcoin.com/api/v1/ticker.do?symbol=btc_usd')
        .then((res) => {
          const { date, ticker } = res.data;
          const { sell, buy, last, low, high, vol } = ticker;
          // console.log('res.data:', res.data);
          return {
            last,
            ask: buy,
            bid: sell,
            low,
            high,
            vol,
            timestamp: date,
            exchange: 'Okcoin',
            pair: 'BTC/USD',
          };
        });
      break;
    default:
      return "Unrecognized exchange"
  }
}

module.exports = coinTicker;

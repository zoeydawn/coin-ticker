const axios = require('axios');

function okcoin(pair) {

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

}

module.exports = okcoin;

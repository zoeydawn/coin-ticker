const axios = require('axios');

function okcoin(pair) {
  const currencyPair = pair === 'ltcusd' ? 'ltc_usd' : 'btc_usd';
  return axios.get(`https://www.okcoin.com/api/v1/ticker.do?symbol=${currencyPair}`)
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
        exchange: 'okcoin',
        pair: currencyPair.split('_').join(''),
        rawData: res.data,
      };
    });

}

module.exports = okcoin;

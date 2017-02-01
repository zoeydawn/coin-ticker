const axios = require('axios');

function btce(pair) {

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

}

module.exports = btce;

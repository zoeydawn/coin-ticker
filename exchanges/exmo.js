const axios = require('axios');

module.exports = (pair) => {
  return axios.get('https://api.exmo.com/v1/ticker/').then((res) => {
    const data = res.data[pair];
    if (!data) {
      return 'invalid currency pair';
    }
    const { last_trade, low, high, vol, updated, buy_price, sell_price } = data;

    return {
      ask: buy_price,
      bid: sell_price,
      last: last_trade,
      low,
      high,
      vol,
      timestamp: updated,
      exchange: 'exmo',
      pair,
      rawData: data,
    };
  })
  .catch(err => console.error('exmo api error:', err));
}

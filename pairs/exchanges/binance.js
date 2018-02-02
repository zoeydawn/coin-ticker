const axios = require('axios');

module.exports = () => {
  return axios.get('https://api.binance.com/api/v3/ticker/price')
    .then((res) => {
      return res.data.map((currencyPair) => {
        pair = currencyPair.symbol.toUpperCase();
        return pair.slice(0, -3) + '_' + pair.substr(pair.length - 3)
      })
    })
    .catch((err) => {
      console.error('Error fetching binance pairs:', err);
    });
}

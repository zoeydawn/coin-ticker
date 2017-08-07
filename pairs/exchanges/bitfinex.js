const axios = require('axios');

module.exports = () => {
  return axios.get('https://api.bitfinex.com/v1/symbols')
    .then((res) => {
      return res.data.map((currencyPair) => {
        pair = currencyPair.toUpperCase();
        return pair.slice(0, -3) + '_' + pair.substr(pair.length - 3)
      })
    })
    .catch((err) => {
      console.error('Error fetching bitfinex pairs:', err);
    });
}

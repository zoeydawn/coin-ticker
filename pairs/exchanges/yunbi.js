const axios = require('axios');

module.exports = () => {
  return axios.get('https://yunbi.com/api/v2/markets')
    .then((res) => {
      return res.data.map((market) => (
        market.name.replace('/', '_')
      ))
    })
    .catch((err) => {
      console.error('Error fetching gdax pairs:', err);
    });
}

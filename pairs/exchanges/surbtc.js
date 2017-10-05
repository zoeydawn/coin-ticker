const axios = require('axios');

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

module.exports = () => {
  return axios.get('https://www.surbtc.com/api/v2/markets', { headers })
    .then((res) => {
      return res.data.markets.map((item) => {
        return `${item.base_currency}_${item.quote_currency}`;
      })
    })
    .catch((err) => {
      console.error('Error fetching surbtc pairs:', err);
    });
}

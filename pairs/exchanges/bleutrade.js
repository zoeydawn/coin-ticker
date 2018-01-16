const axios = require('axios');

module.exports = () => {
  return axios.get('https://bleutrade.com/api/v2/public/getmarkets')
    .then((res) => {
      return res.data.result.map((market) => {
        return `${market.MarketName}`
      })
    })
    .catch((err) => {
      console.error('Error fetching bleutrade pairs:', err);
    });
}

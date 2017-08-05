const axios = require('axios');

module.exports = () => {
  return axios.get('https://api.exmo.com/v1/ticker/')
    .then((res) => {
      return Object.keys(res.data)
    })
    .catch((err) => {
      console.error('Error fetching exmo pairs:', err);
    });
}

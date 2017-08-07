const axios = require('axios');

module.exports = () => {
  return axios.get('https://api.gdax.com/products/')
    .then((res) => {
      return res.data.map((product) => (
        product.id.replace('-', '_')
      ))
    })
    .catch((err) => {
      console.error('Error fetching gdax pairs:', err);
    });
}

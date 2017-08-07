const axios = require('axios');

module.exports = () => {
  return axios.get('https://poloniex.com/public?command=returnTicker')
    .then((res) => {
      return Object.keys(res.data).map((pair) => {
        const [first, second] = pair.split('_');
        return `${second}_${first}`;
      })
    })
    .catch((err) => {
      console.error('Error fetching poloniex pairs:', err);
    });
}

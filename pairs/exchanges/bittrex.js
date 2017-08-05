const axios = require('axios');

module.exports = () => {
  return axios.get('https://bittrex.com/api/v1.1/public/getmarkets')
    .then((res) => {
      return res.data.result.map((market) => {
        const { MarketCurrency, BaseCurrency } = market;
        // pair = currencyPair.toUpperCase();
        // return pair.slice(0, -3) + '_' + pair.substr(pair.length - 3)
        return `${MarketCurrency}_${BaseCurrency}`
      })
    })
    .catch((err) => {
      console.error('Error fetching bittrex pairs:', err);
    });
}

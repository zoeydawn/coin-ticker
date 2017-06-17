const axios = require('axios')

module.exports = (pair) => {
  const currencyPair = pair.toLowerCase()
  return axios.get(`https://btc-e.com/api/3/ticker/${currencyPair}`)
    .then((res) => {
      if (res.data.error === `Invalid pair name: ${currencyPair}`) {
        console.error(res.data.error);
        return 'invalid currency pair';
      }
      const { buy, sell, last, low, high, vol, updated } = res.data[currencyPair]

      return {
        last: last.toString(),
        ask: buy.toString(),
        bid: sell.toString(),
        low: low.toString(),
        high: high.toString(),
        vol: vol.toString(),
        timestamp: updated.toString(),
        exchange: 'btce',
        pair,
        rawData: res.data[currencyPair],
      };
    })
    .catch(err => console.error('btc-e api error:', error));

}

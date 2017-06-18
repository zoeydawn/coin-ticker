const axios = require('axios');

const VERSION_DATE = '2017-06-17';

function coinbase(pair) {
  const currencyPair = pair.replace('_', '-');
  let spot;
  let buy;
  let sell;

  return axios.get(`https://api.coinbase.com/v2/prices/${currencyPair}/spot`, { headers: {'CB-VERSION': VERSION_DATE}})
    .then((spotRes) => {
      if (spotRes.data.errors) {
        error = spotRes.data.errors.id;
      }
      spot = spotRes.data.data;
      return axios.get(`https://api.coinbase.com/v2/prices/${currencyPair}/buy`, { headers: {'CB-VERSION': VERSION_DATE}});
    })
    .then((buyRes) => {
      buy = buyRes.data.data;
      return axios.get(`https://api.coinbase.com/v2/prices/${currencyPair}/sell`, { headers: {'CB-VERSION': VERSION_DATE}});
    })
    .then((sellRes) => {
      sell = sellRes.data.data;
      return {
        last: spot.amount,
        ask: buy.amount,
        bid: sell.amount,
        low: 'not provided',
        high: 'not provided',
        vol: 'not provided',
        timestamp: Date.now() / 1000,
        exchange: 'coinbase',
        pair: pair,

        rawData: { spot, buy, sell },
      };
    })
    .catch((err) => {
      return 'invalid currency pair';
    });
}

module.exports = coinbase;

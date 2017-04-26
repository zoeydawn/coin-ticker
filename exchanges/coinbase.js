const axios = require('axios');

const VERSION_DATE = '2017-04-04'

function coinbase(pair) {
  const availablePairs = [
    'BTC-USD',
    'BTC-EUR',
    'ETH-USD',
    'ETH-EUR',
  ];
  // TODO: fix this so it returns error rather than just use default
  const currencyPair = availablePairs.includes(pair) ? pair : 'BTC-USD';

// needs CB-VERSION header to avoid warning
  return axios.get(`https://api.coinbase.com/v2/prices/${currencyPair}/spot`,
                   { headers: {'CB-VERSION': VERSION_DATE}})
    .then((res) => {
      const { amount, currency } = res.data.data;
      return {
        last: amount,
        currency: currency,
        pair: currencyPair,
        exchange: 'coinbase',
      };
    });

}

module.exports = coinbase;

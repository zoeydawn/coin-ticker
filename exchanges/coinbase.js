const axios = require('axios');

const VERSION_DATE = '2017-04-04'

function coinbase(pair) {
  const availablePairs = {
    btcusd: 'BTC-USD',
    btceur: 'BTC-EUR',
    ethusd: 'ETH-USD',
    etheur: 'ETH-EUR',
  };

  const currencyPair = Object.keys(availablePairs).includes(pair) ? availablePairs[pair] : 'BTC-USD';
  let spot;
  let buy;
  let sell;

  return axios.get(`https://api.coinbase.com/v2/prices/${currencyPair}/spot`, { headers: {'CB-VERSION': VERSION_DATE}})
    .then((spotRes) => {
      spot = spotRes.data.data;
      return axios.get(`https://api.coinbase.com/v2/prices/${currencyPair}/buy`, { headers: {'CB-VERSION': VERSION_DATE}})
    })
    .then((buyRes) => {
      buy = buyRes.data.data;
      return axios.get(`https://api.coinbase.com/v2/prices/${currencyPair}/sell`, { headers: {'CB-VERSION': VERSION_DATE}})
    })
    .then((sellRes) => {
      sell = sellRes.data.data;
      return {
        last: spot.amount,
        ask: buy.amount,
        bid: sell.amount,
        low: null,
        high: null,
        vol: null,
        timestamp: Date.now() / 1000,
        exchange: 'coinbase',
        pair: currencyPair.toLowerCase().split('-').join(''),
      };
    });

}

module.exports = coinbase;

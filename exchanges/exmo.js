const axios = require('axios');

function exmo(pair) {
  const availablePairs = {
    btcusd: 'BTC_USD',
    btceur: 'BTC_EUR',
    btcrub: 'BTC_RUB',
    btcuah: 'BTC_UAH',
    dashbtc: 'DASH_BTC',
    dashusd: 'DASH_USD',
    ethbtc: 'ETH_BTC',
    ethusd: 'ETH_USD',
    ethrub: 'ETH_RUB',
    dogebtc: 'DOGE_BTC',
    ltcbtc: 'LTC_BTC',
    ltcrub: 'LTC_RUB',
  };

  const currencyPair = Object.keys(availablePairs).includes(pair)
    ? pair
    : 'btcusd';
  const specifiedPair = availablePairs[currencyPair];

  return axios.get('https://api.exmo.com/v1/ticker/').then(res => {
    const data = res.data[specifiedPair];
    const { last_trade, low, high, vol, updated, buy_price, sell_price } = data;

    return {
      ask: buy_price,
      bid: sell_price,
      last: last_trade,
      low,
      high,
      vol,
      timestamp: updated,
      exchange: 'exmo',
      pair: currencyPair,
      rawData: data,
    };
  });
}

module.exports = exmo;

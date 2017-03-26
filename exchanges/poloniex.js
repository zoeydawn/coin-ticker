const axios = require('axios');

function poloniex(pair) {
  const availablePairs = {
    btcusd: 'USDT_BTC',
    ethbtc: 'BTC_ETH',
    xrpbtc: 'BTC_XRP',
    dashbtc: 'BTC_DASH',
    ethusd: 'USDT_ETH',
    xmrbtc: 'BTC_XMR',
    etcbtc: 'BTC_ETC',
    fctbtc: 'BTC_FCT',
    zecbtc: 'BTC_ZEC',
    ltcbtc: 'BTC_LTC',
    dashusd: 'USDT_DASH',
    gntbtc: 'BTC_GNT',
    xrpusd: 'USDT_XRP',
    dcrbtc: 'BTC_DCR',
    repbtc: 'BTC_REP',
    maidbtc: 'BTC_MAID',
    lskbtc: 'BTC_LSK',
    xmrusd: 'USDT_XMR',
    dogebtc: 'BTC_DOGE',
    ampbtc: 'BTC_AMP',
    xembtc: 'BTC_XEM',
    sjcxbtc: 'BTC_SJCX',
    etcusd: 'USDT_ETC',
    steembtc: 'BTC_STEEM',
    etceth: 'ETH_ETC',
    navbtc: 'BTC_NAV',
    sysbtc: 'BTC_SYS',
    gnteth: 'ETH_GNT',
    zecusd: 'USDT_ZEC',
    ltcusd: 'USDT_LTC',
  };

  const currencyPair = Object.keys(availablePairs).includes(pair)
    ? pair
    : 'btcusd';
  const specifiedPair = availablePairs[currencyPair];

  return axios.get('https://poloniex.com/public?command=returnTicker')
    .then((res) => {
      const { last, lowestAsk, highestBid, percentChange, baseVolume, high24hr, low24hr } = res.data[specifiedPair];

      return {
        last,
        ask: lowestAsk,
        bid: highestBid,
        low: low24hr,
        high: high24hr,
        vol: baseVolume,
        timestamp: Date.now() / 1000,
        exchange: 'poloniex',
        pair: currencyPair,
      };
    });
}

module.exports = poloniex;

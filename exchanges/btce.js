const axios = require('axios');

function btce(pair) {
  const availablePairs = [
    'btc_usd',
    'btc_rur',
    'btc_eur',
    'ltc_btc',
    'ltc_usd',
    'ltc_rur',
    'ltc_eur',
    'nmc_btc',
    'nmc_usd',
    'nvc_btc',
    'nvc_usd',
    'usd_rur',
    'eur_usd',
    'eur_rur',
    'ppc_btc',
    'ppc_usd',
    'dsh_btc',
    'dsh_usd',
    'eth_btc',
    'eth_usd',
    'eth_eur',
    'eth_ltc',
    'eth_rur',
  ];
  const splitPair = pair ? pair.slice(0, 3) + '_' + pair.slice(3) : null;
  // console.log('splitPair:', splitPair);
  const currencyPair = availablePairs.includes(splitPair) ? splitPair : 'btc_usd';
  return axios.get(`https://btc-e.com/api/3/ticker/${currencyPair}`)
    .then((res) => {
      const { buy, sell, last, low, high, vol, updated } = res.data[currencyPair];
      // console.log('res.data:', res.data);
      return {
        last: last.toString(),
        ask: buy.toString(),
        bid: sell.toString(),
        low: low.toString(),
        high: high.toString(),
        vol: vol.toString(),
        timestamp: updated.toString(),
        exchange: 'btce',
        pair: currencyPair.split('_').join(''),
        rawData: res.data[currencyPair],
      };
    });

}

module.exports = btce;

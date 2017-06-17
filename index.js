const bitfinex = require('./exchanges/bitfinex');
const btce = require('./exchanges/btce');
const bitstamp = require('./exchanges/bitstamp');
const bittrex = require('./exchanges/bittrex');
const kraken = require('./exchanges/kraken');
const okcoin = require('./exchanges/okcoin');
const exmo = require('./exchanges/exmo');
const poloniex = require('./exchanges/poloniex');
const coinbase = require('./exchanges/coinbase');

module.exports = (exchange, currencyPair) => {
  let pair = currencyPair ? currencyPair.toUpperCase() : 'BTC_USD';
  if (!pair.includes('_')) {
    pair = pair.slice(0, -3) + '_' + pair.substr(pair.length - 3);
  }

  switch (exchange) {
    case 'bitfinex':
      return bitfinex(pair);
      break;
    case 'btce':
      return btce(pair);
      break;
    case 'bitstamp':
      return bitstamp(pair);
      break;
    case 'bittrex':
      return bittrex(pair);
      break;
    case 'kraken':
      return kraken(pair);
      break;
    case 'poloniex':
      return poloniex(pair);;
      break;;
    case 'coinbase':
      return coinbase(pair);;
      break;;
    case 'okcoin':
      return okcoin(pair);
      break;
    case 'exmo':
      return exmo(pair);
      break;
    default:
      console.error(`Unrecognized exchange: "${exchange}"`);
      return 'Unrecognized exchange';
  }
}

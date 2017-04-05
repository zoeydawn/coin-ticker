const coinbase = require('./exchanges/coinbase');
const bitstamp = require('./exchanges/bitstamp');

const bitfinex = require('./exchanges/bitfinex');
const btce = require('./exchanges/btce');
const kraken = require('./exchanges/kraken');
const okcoin = require('./exchanges/okcoin');
const exmo = require('./exchanges/exmo');
const poloniex = require('./exchanges/poloniex');

function coinTicker(exchange, pair) {
  switch (exchange) {
    case 'coinbase':
      return coinbase(pair);
      break;
    case 'bitstamp':
      return bitstamp(pair);
      break;

    case 'bitfinex':
      return bitfinex(pair);
      break;
    case 'btce':
      return btce(pair);
      break;
    case 'kraken':
      return kraken(pair);
      break;
    case 'poloniex':
      return poloniex(pair);
      break;
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

module.exports = coinTicker;


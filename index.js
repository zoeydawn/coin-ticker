const bitfinex = require('./exchanges/bitfinex');
const btce = require('./exchanges/btce');
const bitstamp = require('./exchanges/bitstamp');
const kraken = require('./exchanges/kraken');
const okcoin = require('./exchanges/okcoin');
const exmo = require('./exchanges/exmo');

function coinTicker(exchange, pair) {
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
    case 'kraken':
      return kraken(pair);
      break;
    case 'okcoin':
      return okcoin(pair);
      break;
    case 'exmo':
      return exmo(pair);
    default:
      console.error(`Unrecognized exchange: "${exchange}"`);
      return 'Unrecognized exchange';
  }
}

module.exports = coinTicker;

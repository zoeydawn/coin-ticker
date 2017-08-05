const bitfinex = require('./exchanges/bitfinex');
const coinbase = require('./exchanges/coinbase');
const bitstamp = require('./exchanges/bitstamp');
const kraken = require('./exchanges/kraken');
const okcoin = require('./exchanges/okcoin');
const exmo = require('./exchanges/exmo');
const bittrex = require('./exchanges/bittrex');
const poloniex = require('./exchanges/poloniex');

module.exports = (exchange) => {
  switch (exchange) {
    case 'bitfinex':
      return bitfinex();
      break;
    case 'coinbase':
      return coinbase();
      break;
    case 'bitstamp':
      return bitstamp();
      break;
    case 'kraken':
      return kraken();
      break;
    case 'okcoin':
      return okcoin();
      break;
    case 'exmo':
      return exmo();
      break;
    case 'bittrex':
      return bittrex();
      break;
    case 'poloniex':
      return poloniex();
      break;
    default:
      console.error(`Unrecognized exchange: "${exchange}"`);
      return 'Unrecognized exchange';
  }
}

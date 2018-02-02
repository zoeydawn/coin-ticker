const binance = require('./exchanges/binance');
const bitfinex = require('./exchanges/bitfinex');
const coinbase = require('./exchanges/coinbase');
const bitstamp = require('./exchanges/bitstamp');
const kraken = require('./exchanges/kraken');
const okcoin = require('./exchanges/okcoin');
const exmo = require('./exchanges/exmo');
const bittrex = require('./exchanges/bittrex');
const poloniex = require('./exchanges/poloniex');
const bitcoinaverage = require('./exchanges/bitcoinaverage');
const gdax = require('./exchanges/gdax');
const surbtc = require('./exchanges/surbtc');
const bleutrade = require('./exchanges/bleutrade');

module.exports = (exchange) => {
  switch (exchange) {
    case 'binance':
      return binance();
      break;
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
    case 'bitcoinaverage':
    case 'bitcoinAverage':
      return bitcoinaverage();
      break;
    case 'gdax':
      return gdax();
      break;
    case 'surbtc':
      return surbtc();
      break;
    case 'bleutrade':
      return bleutrade();
      break;
    default:
      // console.error(`Unrecognized exchange: "${exchange}"`);
      return 'Unrecognized exchange';
  }
}

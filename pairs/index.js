const bitfinex = require('./exchanges/bitfinex');
const coinbase = require('./exchanges/coinbase');
const bitstamp = require('./exchanges/bitstamp');
const kraken = require('./exchanges/kraken');

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
    default:
      console.error(`Unrecognized exchange: "${exchange}"`);
      return 'Unrecognized exchange';
  }
}

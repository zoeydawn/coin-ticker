const bitfinex = require('./exchanges/bitfinex')
const bitstamp = require('./exchanges/bitstamp')
const bittrex = require('./exchanges/bittrex')
const btce = require('./exchanges/btce')
const coinbase = require('./exchanges/coinbase')
const exmo = require('./exchanges/exmo')
const gdax = require('./exchanges/gdax')
const kraken = require('./exchanges/kraken')
const okcoin = require('./exchanges/okcoin')
const poloniex = require('./exchanges/poloniex')
const yunbi = require('./exchanges/yunbi')

module.exports = (exchange, currencyPair) => {
  let pair = currencyPair ? currencyPair.toUpperCase() : 'BTC_USD'
  // Might just be a good idea to throw an error here since some symbols only have 2 or even 4.
  if (!pair.includes('_')) {
    pair = pair.slice(0, -3) + '_' + pair.substr(pair.length - 3)
  }

  switch (exchange) {
    case 'bitfinex':
      return bitfinex(pair)
    case 'bitstamp':
      return bitstamp(pair)
    case 'bittrex':
      return bittrex(pair)
    case 'btce':
      return btce(pair)
    case 'coinbase':
      return coinbase(pair)
    case 'exmo':
      return exmo(pair)
    case 'gdax':
      return gdax(pair)
    case 'kraken':
      return kraken(pair)
    case 'okcoin':
      return okcoin(pair)
    case 'poloniex':
      return poloniex(pair)
    case 'yunbi':
      return yunbi(pair)
    default:
      console.error(`Unrecognized exchange: "${exchange}"`)
      return 'Unrecognized exchange'
  }
}

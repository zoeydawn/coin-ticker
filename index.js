const bitfinex = require('./exchanges/bitfinex')
const btce = require('./exchanges/btce')
const bitstamp = require('./exchanges/bitstamp')
const bittrex = require('./exchanges/bittrex')
const kraken = require('./exchanges/kraken')
const okcoin = require('./exchanges/okcoin')
const exmo = require('./exchanges/exmo')
const poloniex = require('./exchanges/poloniex')

module.exports = (exchange, pair='BTC_USD') => {
  pair = pair.toUpperCase()
  switch (exchange) {
    case 'bitfinex':
      return bitfinex(pair)
      break
    case 'btce':
      return btce(pair)
      break
    case 'bitstamp':
      return bitstamp(pair)
      break
    case 'bittrex':
      pair = pair === 'BTC_USD' ? 'USDT_BTC' : pair
      return bittrex(pair)
      break
    case 'kraken':
      return kraken(pair)
      break
    case 'poloniex':
      pair = pair === 'BTC_USD' ? 'USDT_BTC' : pair
      return poloniex(pair)
      break
    case 'okcoin':
      return okcoin(pair)
      break
    case 'exmo':
      return exmo(pair)
      break
    default:
      console.error(`Unrecognized exchange: "${exchange}"`)
      return 'Unrecognized exchange'
  }
}

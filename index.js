const btcusd = require('./src/btcusd');

function coinTicker(exchange, pair) {
  return btcusd(exchange);
}

module.exports = coinTicker;

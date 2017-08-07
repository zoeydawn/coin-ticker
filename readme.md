# coin-ticker

Easily get the latest exchange data of Bitcoin, Etherium, Litecoin, and other assets from a variety of exchanges including Bitfinex, Coinbase, Bitstamp, Kraken, Poloniex and others.

[![CircleCI](https://circleci.com/gh/donbobvanbirt/coin-ticker.svg?style=svg)](https://circleci.com/gh/donbobvanbirt/coin-ticker)

## Install

```bash
$ npm install --save coin-ticker
```

## Usage
**Require:**
```js
const coinTicker = require('coin-ticker');
```

**Syntax:**
```js
coinTicker([exchange, assetPair])
```

**Get available exchanges:**
The coinTicker function with no arguments will return an array of all available exchanges
```js
coinTicker()
// =>
// [
//   'bitfinex',
//   'coinbase',
//   'bitstamp',
//   'kraken',
//   'okcoin',
//   'exmo',
//   'bittrex',
//   'poloniex',
//   'bitcoinaverage',
//   'gdax',
//   'yunbi',
// ]
```


**Get available asset pairs by exchange:**
Declare the exchange and use string 'pair' to request available asset pairs. coinTicker will return a promise.
```js
coinTicker('poloniex', 'pair')
  .then((pairs) => {
    console.log(pairs);
  })
// =>
// [
//   'BCN_BTC',
//   'BELA_BTC',
//   'BLK_BTC',
//   'BTCD_BTC',
//   'BTM_BTC',
//   'BTS_BTC',
//   'BURST_BTC',
//   'CLAM_BTC',
//   'DASH_BTC',
//   'DGB_BTC',
//   'DOGE_BTC',
//   'EMC2_BTC',
//   'FLDC_BTC',
//   'FLO_BTC',
//   'GAME_BTC',
//   'GRC_BTC',
//   'HUC_BTC',
//   'LTC_BTC',
//   'MAID_BTC',
//   'OMNI_BTC',
//   ...
// ]
```

**Get Ticker Data:**
Simply declare the exchange and asset pair to get the latest market info. coinTicker will return a promise.
```js
coinTicker('bitfinex', 'BTC_USD')
// => Promise
```

**Response Data:**

An object containing the following values:

```js
{
  last: // the last traded price
  ask:  // current ask
  bid: // current bid
  low: // 24 hour low
  high: // 24 hour high
  vol: // 24 hour volume
  timestamp: // precise time
  exchange: // the current exchange, i.e. 'bitfinex'
  pair: // the asset pair, i.e. 'BTC_USD'
  rawData: // the original, unformatted object received from the exchange api. Differs by exchange.
}
```

**Example:**
```js
coinTicker('bitfinex', 'BTC_USD')
   .then((tick) => {
      console.log(tick)
   })
// =>
// {
//   last: '1034.8',
//   ask: '1034.8',
//   bid: '1034.7',
//   low: '1001.6',
//   high: '1040.0',
//   vol: '15112.8733725',
//   timestamp: '1486238356.227418953',
//   exchange: 'bitfinex',
//   pair: 'BTC_USD',
//   rawData: { ... }
// }
```


If you find this package useful, please contribute by donating or opening a pull request.

*BTC:*
`1Gr9UcXdM5Kmnseht2u29o1SsqMnBkTsYP`

*ETH:*
`0xc519a1904c5a9D99C13374d22388091B807c54cF`

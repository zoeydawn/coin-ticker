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
// => Promise

```

**Syntax:**
```js
coinTicker(exchange, currency-pair)
```

**Parameters:**

**exchange:**
A string declaring one of the available exchanges:

    - 'bitfinex'
    - 'bitstamp'
    - 'coinbase'
    - 'poloniex'
    - 'bittrex'
    - 'btce'
    - 'kraken'
    - 'okcoin'
    - 'exmo'

**currency-pair:**
A string declaring the currencies or assets to retrieve.
Any market that is provided by the exchange can be used.
Example asset pairs by exchange:

**Bitfinex:**

    - 'BTC_USD'
    - 'LTC_USD'
    - 'LTC_BTC'
    - 'ETH_USD'
    - 'ETH_BTC'
    - 'ETC_BTC'
    - 'ETC_USD'
    - 'ZEC_USD'
    - 'ZEC_BTC'

**Bitstamp:**

    - 'BTC_USD'
    - 'BTC_EUR'
    - 'EUR_USD'
    - 'XRP_USD'
    - 'XRP_EUR'

**Coinbase:**

    - 'BTC_USD'
    - 'BTC_EUR'
    - 'ETH_USD'
    - 'ETH_EUR'
    - 'LTC_USD'
    - 'LTC_EUR'

**Poloniex:**

    - 'BTC_USD'
    - 'ETH_BTC'
    - 'XRP_BTC'
    - 'DASH_BTC'
    - 'ETH_USD'
    - 'XMR_BTC'
    - 'ETC_BTC'
    - 'FCT_BTC'
    - 'ZEC_BTC'
    - 'LTC_BTC'
    - 'DASH_USD'
    - 'GNT_BTC'
    - 'XRP_USD'
    - 'DCR_BTC'
    - 'REP_BTC'
    - 'MAID_BTC'
    - 'LSK_BTC'
    - 'XMR_USD'
    - 'DOGE_BTC'
    - 'AMP_BTC'
    - 'XEM_BTC'
    - 'ETC_USD'
    - 'STEEM_BTC'
    - 'ETC_ETH'
    - 'NAV_BTC'
    - 'SYS_BTC'
    - 'GNT_ETH'
    - 'ZEC_USD'
    - 'LTC_USD'

**Bittrex**

    - 'BTC_USD'
    - 'ETH_BTC'
    - 'XRP_BTC'
    - 'DASH_BTC'
    - 'ETH_USD'
    - 'XMR_BTC'
    - 'ETC_BTC'
    - 'FCT_BTC'
    - 'ZEC_BTC'
    - 'LTC_BTC'
    - 'GNT_BTC'
    - 'DCR_BTC'
    - 'REP_BTC'
    - 'MAID_BTC'
    - 'LSK_BTC'
    - 'DOGE_BTC'
    - 'AMP_BTC'
    - 'XEM_BTC'
    - 'SJCX_BTC'
    - 'STEEM_BTC'
    - 'ETC_ETH'
    - 'NAV_BTC'
    - 'SYS_BTC'
    - 'GNT_ETH'

**BTC-e:**

    - 'BTC_USD'
    - 'BTC_EUR'
    - 'BTC_EUR'
    - 'LTC_BTC'
    - 'LTC_USD'
    - 'LTC_RUR'
    - 'LTC_EUR'
    - 'NMC_BTC'
    - 'NMC_USD'
    - 'NVC_BTC'
    - 'NVC_USD'
    - 'USD_RUR'
    - 'EUR_USD'
    - 'EUR_RUR'
    - 'PPC_BTC'
    - 'PPC_USD'
    - 'DSH_BTC'
    - 'DSH_USD'
    - 'ETH_BTC'
    - 'ETH_USD'
    - 'ETH_EUR'
    - 'ETH_LTC'
    - 'ETH_RUR'

**Kraken:**

    - 'ETC_BTC'
    - 'ETC_EUR'
    - 'ETC_USD'
    - 'ETH_BTC'
    - 'ETH_CAD'
    - 'ETH_EUR'
    - 'ETH_GBP'
    - 'ETH_JPY'
    - 'ETH_USD'
    - 'LTC_BTC'
    - 'LTC_EUR'
    - 'LTC_USD'
    - 'BTC_CAD'
    - 'BTC_EUR'
    - 'BTC_GBP'
    - 'BTC_JPY'
    - 'BTC_USD'

**Okcoin:**

    - 'BTC_USD'
    - 'LTC_USD'
    - 'ETH_USD'

**Exmo:**

    - 'BTC_USD'
    - 'BTC_EUR'
    - 'BTC_RUB'
    - 'BTC_UAH'
    - 'DASH_BTC'
    - 'DASH_USD'
    - 'ETH_BTC'
    - 'ETH_USD'
    - 'ETH_RUB'
    - 'DOGE_BTC'
    - 'LTC_BTC'
    - 'LTC_RUB'


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

**Excample:**
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

**Contribute to Coin-ticker:**
If you find this package useful, please contribute by donating bitcoin or opening a pull request.

*BTC Donation address:*
`1Gr9UcXdM5Kmnseht2u29o1SsqMnBkTsYP`

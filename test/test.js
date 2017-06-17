const chai = require('chai');
const { expect } = chai;

const coinTicker = require('../index.js');

const exchanges = {
  bitfinex: [
    'BTC_USD',
    'LTC_USD',
    'ETH_USD',
  ],
  coinbase: [
    'BTC_USD',
    'ETH_USD',
    'LTC_USD',
    'BTC_EUR',
    'ETH_EUR',
    'LTC_EUR',
  ],
  btce: [
    'BTC_USD',
    'LTC_BTC',
    'DSH_USD',
    'ETH_USD',
  ],
  bitstamp: [
    'BTC_USD',
    'BTC_EUR',
    'EUR_USD',
    'XRP_EUR',
  ],
  kraken: [
    'BTC_USD',
    'ETH_USD',
    'ETC_BTC',
    'LTC_EUR',
    'BTC_JPY',
  ],
  okcoin: [
    'BTC_USD',
    'LTC_USD',
  ],
  exmo: [
    'BTC_USD',
    'BTC_RUB',
    'BTC_UAH',
    'DASH_USD',
    'ETH_BTC',
    'ETH_RUB',
    'DOGE_BTC',
    'LTC_BTC',
    'LTC_RUB',
  ],
  bittrex: [
    'BTC_USD',
    'ETH_BTC',
    'XRP_BTC',
    'DASH_BTC',
    'ETH_USD',
    'XMR_BTC',
    'ETC_BTC',
    'FCT_BTC',
    'ZEC_BTC',
    'LTC_BTC',
    'GNT_BTC',
    'DCR_BTC',
    'REP_BTC',
    'MAID_BTC',
    'LSK_BTC',
    'DOGE_BTC',
    'AMP_BTC',
    'XEM_BTC',
    'SJCX_BTC',
    'STEEM_BTC',
    'ETC_ETH',
    'NAV_BTC',
    'SYS_BTC',
    'GNT_ETH',
  ],
  poloniex: [
    'BTC_USD',
    'ETH_BTC',
    'XRP_BTC',
    'DASH_BTC',
    'ETH_USD',
    'XMR_BTC',
    'ETC_BTC',
    'FCT_BTC',
    'ZEC_BTC',
    'LTC_BTC',
    'DASH_USD',
    'GNT_BTC',
    'XRP_USD',
    'DCR_BTC',
    'REP_BTC',
    'MAID_BTC',
    'LSK_BTC',
    'XMR_USD',
    'DOGE_BTC',
    'AMP_BTC',
    'XEM_BTC',
    'SJCX_BTC',
    'ETC_USD',
    'STEEM_BTC',
    'ETC_ETH',
    'NAV_BTC',
    'SYS_BTC',
    'GNT_ETH',
    'ZEC_USD',
    'LTC_USD',
  ],
}

describe('coinTicker', () => {
  Object.keys(exchanges).forEach((exchange) => {
    exchanges[exchange].forEach((pair) => {
      it(`Should return an object of ${exchange} ${pair} data`, (done) => {
        coinTicker(exchange, pair)
          .then((data) => {
            // console.log('data.pair:', data.pair);
            expect(data).to.be.an('object');
            expect(data.rawData).to.be.an('object');
            expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
            expect(data.last).to.be.a('string');
            expect(data.low).to.be.a('string');
            expect(data.high).to.be.a('string');
            expect(data.vol).to.be.a('string');
            expect(data.exchange).to.equal(exchange);
            // expect(data.pair).to.equal(pair);
          })
          .then(done)
          .catch(err => done(err));
      })
    })
  });

  it('Should send error message if given invalid arguments', () => {
    expect(coinTicker('not an exchange')).to.be.a('string');
    expect(coinTicker('not an exchange')).to.equal('Unrecognized exchange');
  });

  it('Should send error message if given no arguments', () => {
    expect(coinTicker()).to.be.a('string');
    expect(coinTicker()).to.equal('Unrecognized exchange');
  });
});

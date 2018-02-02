const chai = require('chai');
const { expect } = chai;

const coinTicker = require('../index.js');

const exchanges = [
  'binance',
  'bitfinex',
  'bleutrade',
  'coinbase',
  'bitstamp',
  'kraken',
  'okcoin',
  'exmo',
  'bittrex',
  'poloniex',
  'bitcoinaverage',
  'gdax',
  'surbtc',
];

describe('coinTicker', function() {
  this.timeout(60000);
  it('Should return array of all available exchanges', (done) => {
    expect(coinTicker()).to.be.an('array');
    exchanges.forEach((exchange) => {
      expect(coinTicker()).to.include(exchange);
    })
    done();
  })
  exchanges.forEach((exchange) => {
    it(`Should return ${exchange} pairs and tickerData`, (done) => {
      coinTicker(exchange, 'pairs')
      .then((data) => {
        // console.log('data:', data);
        expect(data).to.be.an('array');
        expect(data[0]).to.be.an('string');
        return coinTicker(exchange, data[0]);
      })
      .then((tickerData) => {
        // console.log('tickerData:', tickerData);
        expect(tickerData).to.be.an('object');
        expect(tickerData.rawData).to.be.an('object');
        expect(tickerData).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
        expect(tickerData.last).to.be.a('string');
        expect(tickerData.low).to.be.a('string');
        expect(tickerData.high).to.be.a('string');
        expect(tickerData.vol).to.be.a('string');
        expect(tickerData.exchange).to.equal(exchange);
      })
      .then(done)
      .catch(err => done(err))
    })
  });
});

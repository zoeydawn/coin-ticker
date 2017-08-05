const chai = require('chai');
const { expect } = chai;

const coinTicker = require('../index.js');

const exchanges = [
  'bitfinex',
  'coinbase',
  'bitstamp',
  'kraken',
  'okcoin',
  'exmo',
  'bittrex',
  'poloniex',
  'bitcoinaverage'
]

describe('coinTicker', () => {
  exchanges.forEach((exchange) => {
    it(`Should return ${exchange} pairs and tickerData`, (done) => {
      coinTicker(exchange, 'pairs')
      .then((data) => {
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

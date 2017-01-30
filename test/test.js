const chai = require('chai');
const { expect } = chai;

const coinTicker = require('../index.js');

describe('coinTicker', () => {

  it('Should return an object of Bitfinex data', () => {
    return coinTicker('bitfinex').then((data) => {
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('Bitfinex');
    })
  })

  it('Should return an object of BTC-e data', () => {
    return coinTicker('btce').then((data) => {
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('BTC-e');
    })
  })

  it('Should return an object of Bitstamp data', () => {
    return coinTicker('bitstamp').then((data) => {
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('Bitstamp');
    })
  })

  it('Should return an object of Kraken data', () => {
    return coinTicker('kraken').then((data) => {
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('Kraken');
    })
  })

  it('Should return an object of Okcoin data', () => {
    return coinTicker('okcoin').then((data) => {
      // console.log('data:', data);
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('Okcoin');
    })
  })

  it('Should send error message if given invalid arguments', () => {
    expect(coinTicker('not an exchange')).to.be.a('string');
    expect(coinTicker('not an exchange')).to.equal('Unrecognized exchange');
  })

  it('Should send error message if given no arguments', () => {
    expect(coinTicker()).to.be.a('string');
    expect(coinTicker()).to.equal('Unrecognized exchange');
  })

})

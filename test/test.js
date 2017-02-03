const chai = require('chai');
const { expect } = chai;

const coinTicker = require('../index.js');

describe('coinTicker', () => {

  it('Should return an object of Bitfinex BTC/USD data', () => {
    return coinTicker('bitfinex').then((data) => {
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('bitfinex');
    })
  })

  it('Should return an object of Bitfinex LTC/USD data', () => {
    return coinTicker('bitfinex', 'ltcusd').then((data) => {
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('bitfinex');
      expect(data.pair).to.equal('ltcusd');
    })
  })

  it('Should return an object of Bitfinex ETH/BTC data', () => {
    return coinTicker('bitfinex', 'ethusd').then((data) => {
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('bitfinex');
      expect(data.pair).to.equal('ethusd');
    })
  })

  it('Should return an object of BTC-e BTC/USD data', () => {
    return coinTicker('btce').then((data) => {
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('btce');
    })
  })

  it('Should return an object of btce LTC/BTC data', () => {
    return coinTicker('btce', 'ltcbtc').then((data) => {
      // console.log('data:', data);
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('btce');
      expect(data.pair).to.equal('ltcbtc');
    })
  })

  it('Should return an object of btce DSH/USD data', () => {
    return coinTicker('btce', 'dshusd').then((data) => {
      // console.log('data:', data);
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('btce');
      expect(data.pair).to.equal('dshusd');
    })
  })

  it('Should return an object of btce ETH/LTC data', () => {
    return coinTicker('btce', 'ethltc').then((data) => {
      // console.log('data:', data);
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('btce');
      expect(data.pair).to.equal('ethltc');
    })
  })

  it('Should return an object of Bitstamp BTC/USD data', () => {
    return coinTicker('bitstamp').then((data) => {
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('bitstamp');
    })
  })

  it('Should return an object of Bitstamp BTC/EUR data', () => {
    return coinTicker('bitstamp', 'btceur').then((data) => {
      // console.log('data:', data);
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('bitstamp');
      expect(data.pair).to.equal('btceur');
    })
  })

  it('Should return an object of Bitstamp EUR/USD data', () => {
    return coinTicker('bitstamp', 'eurusd').then((data) => {
      // console.log('data:', data);
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('bitstamp');
      expect(data.pair).to.equal('eurusd');
    })
  })

  it('Should return an object of Bitstamp XRP/EUR data', () => {
    return coinTicker('bitstamp', 'xrpeur').then((data) => {
      // console.log('data:', data);
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('bitstamp');
      expect(data.pair).to.equal('xrpeur');
    })
  })

  it('Should return an object of Kraken BTC/USD data', () => {
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

  it('Should return an object of Okcoin BTC/USD data', () => {
    return coinTicker('okcoin').then((data) => {
      // console.log('data:', data);
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('okcoin');
    })
  })

  it('Should return an object of Okcoin LTC/USD data', () => {
    return coinTicker('okcoin', 'ltcusd').then((data) => {
      // console.log('data:', data);
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('okcoin');
      expect(data.pair).to.equal('ltcusd');
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

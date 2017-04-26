const chai = require('chai');
const { expect } = chai;

const coinTicker = require('../index.js');

describe('coinTicker', () => {

  // Coinbase
  it('Should return an object of Coinbase BTC/USD data', done => {
    var objectdata = coinTicker('coinbase', 'BTC-USD').then(data => {
      //console.log('data: ', data); 
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'currency', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.exchange).to.equal('coinbase');
      done();
    });
  });

  it('Should return an object of Coinbase ETH/USD data', done => {
    coinTicker('coinbase', 'ETH-USD').then(data => {
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'currency', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.exchange).to.equal('coinbase');
      done();
    });
  });

  it('Should return an object of Coinbase BTC/EUR data', done => {
    coinTicker('coinbase', 'BTC-EUR').then(data => {
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'currency', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.exchange).to.equal('coinbase');
      done();
    });
  });

  it('Should return an object of Coinbase ETH/USD data', done => {
    coinTicker('coinbase', 'ETH-USD').then(data => {
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'currency', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.exchange).to.equal('coinbase');
      done();
    });
  });


  it('Should return an object of Bitfinex BTC/USD data', done => {
    coinTicker('bitfinex').then(data => {
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('bitfinex');
      done();
    });
  });

  it('Should return an object of Bitfinex LTC/USD data', done => {
    coinTicker('bitfinex', 'ltcusd').then(data => {
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('bitfinex');
      expect(data.pair).to.equal('ltcusd');
      done();
    });
  });

  it('Should return an object of Bitfinex ETH/BTC data', done => {
    coinTicker('bitfinex', 'ethusd').then(data => {
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('bitfinex');
      expect(data.pair).to.equal('ethusd');
      done();
    });
  });

  it('Should return an object of BTC-e BTC/USD data', done => {
    coinTicker('btce').then(data => {
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('btce');
      done();
    });
  });

  it('Should return an object of btce LTC/BTC data', done => {
    coinTicker('btce', 'ltcbtc').then(data => {
      // console.log('data:', data);
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('btce');
      expect(data.pair).to.equal('ltcbtc');
      done();
    });
  });

  it('Should return an object of btce DSH/USD data', done => {
    coinTicker('btce', 'dshusd').then(data => {
      // console.log('data:', data);
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('btce');
      expect(data.pair).to.equal('dshusd');
      done();
    });
  });

  it('Should return an object of btce ETH/LTC data', done => {
    coinTicker('btce', 'ethltc').then(data => {
      // console.log('data:', data);
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('btce');
      expect(data.pair).to.equal('ethltc');
      done();
    });
  });

  it('Should return an object of Bitstamp BTC/USD data', done => {
    coinTicker('bitstamp').then(data => {
      expect(data).to.be.an('object');
      expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
      expect(data.last).to.be.a('string');
      expect(data.low).to.be.a('string');
      expect(data.high).to.be.a('string');
      expect(data.vol).to.be.a('string');
      expect(data.exchange).to.equal('bitstamp');
      done();
    });
  });

  it('Should return an object of Bitstamp BTC/EUR data', done => {
    coinTicker('bitstamp', 'btceur')
      .then(data => {
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
      .then(done)
      .catch(err => done(err));
  });

  it('Should return an object of Bitstamp EUR/USD data', done => {
    coinTicker('bitstamp', 'eurusd')
      .then(data => {
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
      .then(done)
      .catch(err => done(err));
  });

  it('Should return an object of Bitstamp XRP/EUR data', done => {
    coinTicker('bitstamp', 'xrpeur')
      .then(data => {
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
      .then(done)
      .catch(err => done(err));
  });

  it('Should return an object of Kraken BTC/USD data', done => {
    coinTicker('kraken')
      .then(data => {
        // console.log('data:', data);
        expect(data).to.be.an('object');
        expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
        expect(data.last).to.be.a('string');
        expect(data.low).to.be.a('string');
        expect(data.high).to.be.a('string');
        expect(data.vol).to.be.a('string');
        expect(data.exchange).to.equal('kraken');
      })
      .then(done)
      .catch(err => done(err));
  });

  it('Should return an object of Kraken ETH/USD data', done => {
    coinTicker('kraken', 'ethusd')
      .then(data => {
        // console.log('data:', data);
        expect(data).to.be.an('object');
        expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
        expect(data.last).to.be.a('string');
        expect(data.low).to.be.a('string');
        expect(data.high).to.be.a('string');
        expect(data.vol).to.be.a('string');
        expect(data.exchange).to.equal('kraken');
        expect(data.pair).to.equal('ethusd');
      })
      .then(done)
      .catch(err => done(err));
  });

  it('Should return an object of Kraken ETC/BTC data', done => {
    coinTicker('kraken', 'etcbtc')
      .then(data => {
        // console.log('data:', data);
        expect(data).to.be.an('object');
        expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
        expect(data.last).to.be.a('string');
        expect(data.low).to.be.a('string');
        expect(data.high).to.be.a('string');
        expect(data.vol).to.be.a('string');
        expect(data.exchange).to.equal('kraken');
        expect(data.pair).to.equal('etcbtc');
      })
      .then(done)
      .catch(err => done(err));
  });

  it('Should return an object of Kraken LTC/EUR data', done => {
    coinTicker('kraken', 'ltceur')
      .then(data => {
        // console.log('data:', data);
        expect(data).to.be.an('object');
        expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
        expect(data.last).to.be.a('string');
        expect(data.low).to.be.a('string');
        expect(data.high).to.be.a('string');
        expect(data.vol).to.be.a('string');
        expect(data.exchange).to.equal('kraken');
        expect(data.pair).to.equal('ltceur');
      })
      .then(done)
      .catch(err => done(err));
  });

  it('Should return an object of Kraken BTC/JPY data', done => {
    coinTicker('kraken', 'btcjpy')
      .then(data => {
        // console.log('data:', data);
        expect(data).to.be.an('object');
        expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
        expect(data.last).to.be.a('string');
        expect(data.low).to.be.a('string');
        expect(data.high).to.be.a('string');
        expect(data.vol).to.be.a('string');
        expect(data.exchange).to.equal('kraken');
        expect(data.pair).to.equal('btcjpy');
      })
      .then(done)
      .catch(err => done(err));
  });

  it('Should return an object of Okcoin BTC/USD data', done => {
    coinTicker('okcoin')
      .then(data => {
        // console.log('data:', data);
        expect(data).to.be.an('object');
        expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
        expect(data.last).to.be.a('string');
        expect(data.low).to.be.a('string');
        expect(data.high).to.be.a('string');
        expect(data.vol).to.be.a('string');
        expect(data.exchange).to.equal('okcoin');
      })
      .then(done)
      .catch(err => done(err));
  });

  it('Should return an object of Okcoin LTC/USD data', done => {
    coinTicker('okcoin', 'ltcusd')
      .then(data => {
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
      .then(done)
      .catch(err => done(err));
  });

  describe('Exmo exchange', () => {
    const availablePairs = [
      'btcusd',
      'btceur',
      'btcrub',
      'btcuah',
      'dashbtc',
      'dashusd',
      'ethbtc',
      'ethusd',
      'ethrub',
      'dogebtc',
      'ltcbtc',
      'ltcrub',
    ];

    availablePairs.forEach(pair => {
      it(`Should return an object of EXMO ${pair} data`, done => {
        coinTicker('exmo', pair)
          .then(data => {
            expect(data).to.be.an('object');
            expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
            expect(data.last).to.be.a('string');
            expect(data.low).to.be.a('string');
            expect(data.high).to.be.a('string');
            expect(data.vol).to.be.a('string');
            expect(data.exchange).to.equal('exmo');
            expect(data.pair).to.equal(pair);
          })
          .then(done)
          .catch(err => done(err));
      });
    });
  });

  describe('Poloniex exchange', () => {
    const availablePairs = [
      'btcusd',
      'ethbtc',
      'xrpbtc',
      'dashbtc',
      'ethusd',
      'xmrbtc',
      'etcbtc',
      'fctbtc',
      'zecbtc',
      'ltcbtc',
      'dashusd',
      'gntbtc',
      'xrpusd',
      'dcrbtc',
      'repbtc',
      'maidbtc',
      'lskbtc',
      'xmrusd',
      'dogebtc',
      'ampbtc',
      'xembtc',
      'sjcxbtc',
      'etcusd',
      'steembtc',
      'etceth',
      'navbtc',
      'sysbtc',
      'gnteth',
      'zecusd',
      'ltcusd',
    ];

    availablePairs.forEach(pair => {
      it(`Should return an object of Poloniex ${pair} data`, done => {
        coinTicker('poloniex', pair)
          .then(data => {
            expect(data).to.be.an('object');
            expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair');
            expect(data.last).to.be.a('string');
            expect(data.low).to.be.a('string');
            expect(data.high).to.be.a('string');
            expect(data.vol).to.be.a('string');
            expect(data.exchange).to.equal('poloniex');
            expect(data.pair).to.equal(pair);
          })
          .then(done)
          .catch(err => done(err));
      });
    });
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


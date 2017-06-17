const chai = require('chai')
const { expect } = chai

const coinTicker = require('../index.js')

describe('coinTicker', () => {
//   // it('Should return an object of Bitfinex BTC/USD data', done => {
//   //   coinTicker('bitfinex').then(data => {
//   //     expect(data).to.be.an('object');
//   //     expect(data.rawData).to.be.an('object');
//   //     expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //     expect(data.last).to.be.a('string');
//   //     expect(data.low).to.be.a('string');
//   //     expect(data.high).to.be.a('string');
//   //     expect(data.vol).to.be.a('string');
//   //     expect(data.exchange).to.equal('bitfinex');
//   //     done();
//   //   });
//   // });
//   //
//   // it('Should return an object of Bitfinex LTC/USD data', done => {
//   //   coinTicker('bitfinex', 'ltcusd').then(data => {
//   //     expect(data).to.be.an('object');
//   //     expect(data.rawData).to.be.an('object');
//   //     expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //     expect(data.last).to.be.a('string');
//   //     expect(data.low).to.be.a('string');
//   //     expect(data.high).to.be.a('string');
//   //     expect(data.vol).to.be.a('string');
//   //     expect(data.exchange).to.equal('bitfinex');
//   //     // expect(data.pair).to.equal('ltcusd');
//   //     done();
//   //   });
//   // });
//   //
//   // it('Should return an object of Bitfinex ETH/BTC data', done => {
//   //   coinTicker('bitfinex', 'ethusd').then(data => {
//   //     expect(data).to.be.an('object');
//   //     expect(data.rawData).to.be.an('object');
//   //     expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //     expect(data.last).to.be.a('string');
//   //     expect(data.low).to.be.a('string');
//   //     expect(data.high).to.be.a('string');
//   //     expect(data.vol).to.be.a('string');
//   //     expect(data.exchange).to.equal('bitfinex');
//   //     // expect(data.pair).to.equal('ethusd');
//   //     done();
//   //   });
//   // });
//   //
//   // it('Should return an object of Coinbase BTC/USD data', done => {
//   //   coinTicker('coinbase', 'btcusd').then(data => {
//   //     expect(data).to.be.an('object');
//   //     expect(data.rawData).to.be.an('object');
//   //     expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //     expect(data.last).to.be.a('string');
//   //     expect(data.exchange).to.equal('coinbase');
//   //     // expect(data.pair).to.equal('btcusd');
//   //     done();
//   //   });
//   // });
//   //
//   // it('Should return an object of Coinbase ETH/USD data', done => {
//   //   coinTicker('coinbase', 'ethusd').then(data => {
//   //     expect(data).to.be.an('object');
//   //     expect(data.rawData).to.be.an('object');
//   //     expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //     expect(data.last).to.be.a('string');
//   //     expect(data.exchange).to.equal('coinbase');
//   //     // expect(data.pair).to.equal('ethusd');
//   //     done();
//   //   });
//   // });
//   //
//   // it('Should return an object of Coinbase BTC/EUR data', done => {
//   //   coinTicker('coinbase', 'btceur').then(data => {
//   //     expect(data).to.be.an('object');
//   //     expect(data.rawData).to.be.an('object');
//   //     expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //     expect(data.last).to.be.a('string');
//   //     expect(data.exchange).to.equal('coinbase');
//   //     // expect(data.pair).to.equal('btceur');
//   //     done();
//   //   });
//   // });
//   //
//   // it('Should return an object of Coinbase ETH/EUR data', done => {
//   //   coinTicker('coinbase', 'etheur').then(data => {
//   //     expect(data).to.be.an('object');
//   //     expect(data.rawData).to.be.an('object');
//   //     expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //     expect(data.last).to.be.a('string');
//   //     expect(data.exchange).to.equal('coinbase');
//   //     // expect(data.pair).to.equal('etheur');
//   //     done();
//   //   });
//   // });
//   //
//   // it('Should return an object of BTC-e BTC/USD data', done => {
//   //   coinTicker('btce').then(data => {
//   //     expect(data).to.be.an('object');
//   //     expect(data.rawData).to.be.an('object');
//   //     expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //     expect(data.last).to.be.a('string');
//   //     expect(data.low).to.be.a('string');
//   //     expect(data.high).to.be.a('string');
//   //     expect(data.vol).to.be.a('string');
//   //     expect(data.exchange).to.equal('btce');
//   //     done();
//   //   });
//   // });
//   //
//   // it('Should return an object of btce LTC/BTC data', done => {
//   //   coinTicker('btce', 'ltcbtc').then(data => {
//   //     // console.log('data:', data);
//   //     expect(data).to.be.an('object');
//   //     expect(data.rawData).to.be.an('object');
//   //     expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //     expect(data.last).to.be.a('string');
//   //     expect(data.low).to.be.a('string');
//   //     expect(data.high).to.be.a('string');
//   //     expect(data.vol).to.be.a('string');
//   //     expect(data.exchange).to.equal('btce');
//   //     // expect(data.pair).to.equal('ltcbtc');
//   //     done();
//   //   });
//   // });
//   //
//   // it('Should return an object of btce DSH/USD data', done => {
//   //   coinTicker('btce', 'dshusd').then(data => {
//   //     // console.log('data:', data);
//   //     expect(data).to.be.an('object');
//   //     expect(data.rawData).to.be.an('object');
//   //     expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //     expect(data.last).to.be.a('string');
//   //     expect(data.low).to.be.a('string');
//   //     expect(data.high).to.be.a('string');
//   //     expect(data.vol).to.be.a('string');
//   //     expect(data.exchange).to.equal('btce');
//   //     // expect(data.pair).to.equal('dshusd');
//   //     done();
//   //   });
//   // });
//   //
//   // it('Should return an object of btce ETH/LTC data', done => {
//   //   coinTicker('btce', 'ethltc').then(data => {
//   //     // console.log('data:', data);
//   //     expect(data).to.be.an('object');
//   //     expect(data.rawData).to.be.an('object');
//   //     expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //     expect(data.last).to.be.a('string');
//   //     expect(data.low).to.be.a('string');
//   //     expect(data.high).to.be.a('string');
//   //     expect(data.vol).to.be.a('string');
//   //     expect(data.exchange).to.equal('btce');
//   //     // expect(data.pair).to.equal('ethltc');
//   //     done();
//   //   });
//   // });
//   //
//   // it('Should return an object of Bitstamp BTC/USD data', done => {
//   //   coinTicker('bitstamp').then(data => {
//   //     expect(data).to.be.an('object');
//   //     expect(data.rawData).to.be.an('object');
//   //     expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //     expect(data.last).to.be.a('string');
//   //     expect(data.low).to.be.a('string');
//   //     expect(data.high).to.be.a('string');
//   //     expect(data.vol).to.be.a('string');
//   //     expect(data.exchange).to.equal('bitstamp');
//   //     done();
//   //   });
//   // });
//   //
//   // it('Should return an object of Bitstamp BTC/EUR data', done => {
//   //   coinTicker('bitstamp', 'btceur')
//   //     .then(data => {
//   //       // console.log('data:', data);
//   //       expect(data).to.be.an('object');
//   //       expect(data.rawData).to.be.an('object');
//   //       expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //       expect(data.last).to.be.a('string');
//   //       expect(data.low).to.be.a('string');
//   //       expect(data.high).to.be.a('string');
//   //       expect(data.vol).to.be.a('string');
//   //       expect(data.exchange).to.equal('bitstamp');
//   //       // expect(data.pair).to.equal('btceur');
//   //     })
//   //     .then(done)
//   //     .catch(err => done(err));
//   // });
//   //
//   // it('Should return an object of Bitstamp EUR/USD data', done => {
//   //   coinTicker('bitstamp', 'eurusd')
//   //     .then(data => {
//   //       // console.log('data:', data);
//   //       expect(data).to.be.an('object');
//   //       expect(data.rawData).to.be.an('object');
//   //       expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //       expect(data.last).to.be.a('string');
//   //       expect(data.low).to.be.a('string');
//   //       expect(data.high).to.be.a('string');
//   //       expect(data.vol).to.be.a('string');
//   //       expect(data.exchange).to.equal('bitstamp');
//   //       // expect(data.pair).to.equal('eurusd');
//   //     })
//   //     .then(done)
//   //     .catch(err => done(err));
//   // });
//   //
//   // it('Should return an object of Bitstamp XRP/EUR data', done => {
//   //   coinTicker('bitstamp', 'xrpeur')
//   //     .then(data => {
//   //       // console.log('data:', data);
//   //       expect(data).to.be.an('object');
//   //       expect(data.rawData).to.be.an('object');
//   //       expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //       expect(data.last).to.be.a('string');
//   //       expect(data.low).to.be.a('string');
//   //       expect(data.high).to.be.a('string');
//   //       expect(data.vol).to.be.a('string');
//   //       expect(data.exchange).to.equal('bitstamp');
//   //       // expect(data.pair).to.equal('xrpeur');
//   //     })
//   //     .then(done)
//   //     .catch(err => done(err));
//   // });
//   //
//   // it('Should return an object of Kraken BTC/USD data', done => {
//   //   coinTicker('kraken')
//   //     .then(data => {
//   //       // console.log('data:', data);
//   //       expect(data).to.be.an('object');
//   //       expect(data.rawData).to.be.an('object');
//   //       expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //       expect(data.last).to.be.a('string');
//   //       expect(data.low).to.be.a('string');
//   //       expect(data.high).to.be.a('string');
//   //       expect(data.vol).to.be.a('string');
//   //       expect(data.exchange).to.equal('kraken');
//   //     })
//   //     .then(done)
//   //     .catch(err => done(err));
//   // });
//   //
//   // it('Should return an object of Kraken ETH/USD data', done => {
//   //   coinTicker('kraken', 'ethusd')
//   //     .then(data => {
//   //       // console.log('data:', data);
//   //       expect(data).to.be.an('object');
//   //       expect(data.rawData).to.be.an('object');
//   //       expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //       expect(data.last).to.be.a('string');
//   //       expect(data.low).to.be.a('string');
//   //       expect(data.high).to.be.a('string');
//   //       expect(data.vol).to.be.a('string');
//   //       expect(data.exchange).to.equal('kraken');
//   //       // expect(data.pair).to.equal('ethusd');
//   //     })
//   //     .then(done)
//   //     .catch(err => done(err));
//   // });
//   //
//   // it('Should return an object of Kraken ETC/BTC data', done => {
//   //   coinTicker('kraken', 'etcbtc')
//   //     .then(data => {
//   //       // console.log('data:', data);
//   //       expect(data).to.be.an('object');
//   //       expect(data.rawData).to.be.an('object');
//   //       expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //       expect(data.last).to.be.a('string');
//   //       expect(data.low).to.be.a('string');
//   //       expect(data.high).to.be.a('string');
//   //       expect(data.vol).to.be.a('string');
//   //       expect(data.exchange).to.equal('kraken');
//   //       // expect(data.pair).to.equal('etcbtc');
//   //     })
//   //     .then(done)
//   //     .catch(err => done(err));
//   // });
//   //
//   // it('Should return an object of Kraken LTC/EUR data', done => {
//   //   coinTicker('kraken', 'ltceur')
//   //     .then(data => {
//   //       // console.log('data:', data);
//   //       expect(data).to.be.an('object');
//   //       expect(data.rawData).to.be.an('object');
//   //       expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //       expect(data.last).to.be.a('string');
//   //       expect(data.low).to.be.a('string');
//   //       expect(data.high).to.be.a('string');
//   //       expect(data.vol).to.be.a('string');
//   //       expect(data.exchange).to.equal('kraken');
//   //       // expect(data.pair).to.equal('ltceur');
//   //     })
//   //     .then(done)
//   //     .catch(err => done(err));
//   // });
//   //
//   // it('Should return an object of Kraken BTC/JPY data', done => {
//   //   coinTicker('kraken', 'btcjpy')
//   //     .then(data => {
//   //       // console.log('data:', data);
//   //       expect(data).to.be.an('object');
//   //       expect(data.rawData).to.be.an('object');
//   //       expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //       expect(data.last).to.be.a('string');
//   //       expect(data.low).to.be.a('string');
//   //       expect(data.high).to.be.a('string');
//   //       expect(data.vol).to.be.a('string');
//   //       expect(data.exchange).to.equal('kraken');
//   //       // expect(data.pair).to.equal('btcjpy');
//   //     })
//   //     .then(done)
//   //     .catch(err => done(err));
//   // });
//   //
//   // it('Should return an object of Okcoin BTC/USD data', done => {
//   //   coinTicker('okcoin')
//   //     .then(data => {
//   //       // console.log('data:', data);
//   //       expect(data).to.be.an('object');
//   //       expect(data.rawData).to.be.an('object');
//   //       expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //       expect(data.last).to.be.a('string');
//   //       expect(data.low).to.be.a('string');
//   //       expect(data.high).to.be.a('string');
//   //       expect(data.vol).to.be.a('string');
//   //       expect(data.exchange).to.equal('okcoin');
//   //     })
//   //     .then(done)
//   //     .catch(err => done(err));
//   // });
//   //
//   // it('Should return an object of Okcoin LTC/USD data', done => {
//   //   coinTicker('okcoin', 'ltcusd')
//   //     .then(data => {
//   //       // console.log('data:', data);
//   //       expect(data).to.be.an('object');
//   //       expect(data.rawData).to.be.an('object');
//   //       expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //       expect(data.last).to.be.a('string');
//   //       expect(data.low).to.be.a('string');
//   //       expect(data.high).to.be.a('string');
//   //       expect(data.vol).to.be.a('string');
//   //       expect(data.exchange).to.equal('okcoin');
//   //       // expect(data.pair).to.equal('ltcusd');
//   //     })
//   //     .then(done)
//   //     .catch(err => done(err));
//   // });
//   //
//   // describe('Exmo exchange', () => {
//   //   const availablePairs = [
//   //     'btcusd',
//   //     'btceur',
//   //     'btcrub',
//   //     'btcuah',
//   //     'dashbtc',
//   //     'dashusd',
//   //     'ethbtc',
//   //     'ethusd',
//   //     'ethrub',
//   //     'dogebtc',
//   //     'ltcbtc',
//   //     'ltcrub',
//   //   ];
//   //
//   //   availablePairs.forEach(pair => {
//   //     it(`Should return an object of EXMO ${pair} data`, done => {
//   //       coinTicker('exmo', pair)
//   //         .then(data => {
//   //           expect(data).to.be.an('object');
//   //           expect(data.rawData).to.be.an('object');
//   //           expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //           expect(data.last).to.be.a('string');
//   //           expect(data.low).to.be.a('string');
//   //           expect(data.high).to.be.a('string');
//   //           expect(data.vol).to.be.a('string');
//   //           expect(data.exchange).to.equal('exmo');
//   //           // expect(data.pair).to.equal(pair);
//   //         })
//   //         .then(done)
//   //         .catch(err => done(err));
//   //     });
//   //   });
//   // });
//   //
//   // describe('Bittrex exchange', () => {
//   //   const availablePairs = [
//   //     'btcusd',
//   //     'ethbtc',
//   //     'xrpbtc',
//   //     'dashbtc',
//   //     'ethusd',
//   //     'xmrbtc',
//   //     'etcbtc',
//   //     'fctbtc',
//   //     'zecbtc',
//   //     'ltcbtc',
//   //     'gntbtc',
//   //     'dcrbtc',
//   //     'repbtc',
//   //     'maidbtc',
//   //     'lskbtc',
//   //     'dogebtc',
//   //     'ampbtc',
//   //     'xembtc',
//   //     'sjcxbtc',
//   //     'steembtc',
//   //     'etceth',
//   //     'navbtc',
//   //     'sysbtc',
//   //     'gnteth',
//   //   ];
//   //
//   //   availablePairs.forEach(pair => {
//   //     it(`Should return an object of Bittrex ${pair} data`, done => {
//   //       coinTicker('bittrex', pair)
//   //         .then(data => {
//   //           expect(data).to.be.an('object');
//   //           expect(data.rawData).to.be.an('object');
//   //           expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//   //           expect(data.last).to.be.a('string');
//   //           expect(data.low).to.be.a('string');
//   //           expect(data.high).to.be.a('string');
//   //           expect(data.vol).to.be.a('string');
//   //           expect(data.exchange).to.equal('bittrex');
//   //           // expect(data.pair).to.equal(pair);
//   //         })
//   //         .then(done)
//   //         .catch(err => done(err));
//   //     });
//   //   });
//   // });
//
//   it('Should return an object of Bitfinex BTC/USD data', done => {
//     coinTicker('bitfinex').then(data => {
//       expect(data).to.be.an('object')
//       expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair')
//       expect(data.last).to.be.a('string')
//       expect(data.low).to.be.a('string')
//       expect(data.high).to.be.a('string')
//       expect(data.vol).to.be.a('string')
//       expect(data.exchange).to.equal('bitfinex')
//       expect(data.pair).to.equal('BTC_USD')
//       done()
//     })
//   })
//
//   it('Should return an object of Bitfinex LTC/USD data', done => {
//     coinTicker('bitfinex', 'LTC_USD').then(data => {
//       expect(data).to.be.an('object')
//       expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair')
//       expect(data.last).to.be.a('string')
//       expect(data.low).to.be.a('string')
//       expect(data.high).to.be.a('string')
//       expect(data.vol).to.be.a('string')
//       expect(data.exchange).to.equal('bitfinex')
//       expect(data.pair).to.equal('LTC_USD')
//       done()
//     })
//   })
//
//   it('Should return an object of Bitfinex ETH/USD data', done => {
//     coinTicker('bitfinex', 'ETH_USD').then(data => {
//       expect(data).to.be.an('object')
//       expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair')
//       expect(data.last).to.be.a('string')
//       expect(data.low).to.be.a('string')
//       expect(data.high).to.be.a('string')
//       expect(data.vol).to.be.a('string')
//       expect(data.exchange).to.equal('bitfinex')
//       expect(data.pair).to.equal('ETH_USD')
//       done()
//     })
//   })
//
//   it('Should return an object of BTC-e BTC/USD data', done => {
//     coinTicker('btce').then(data => {
//       expect(data).to.be.an('object')
//       expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair')
//       expect(data.last).to.be.a('string')
//       expect(data.low).to.be.a('string')
//       expect(data.high).to.be.a('string')
//       expect(data.vol).to.be.a('string')
//       expect(data.exchange).to.equal('btce')
//       expect(data.pair).to.equal('BTC_USD')
//       done()
//     })
//   })
//
//   it('Should return an object of btce LTC/BTC data', done => {
//     coinTicker('btce', 'LTC_BTC').then(data => {
//       expect(data).to.be.an('object')
//       expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair')
//       expect(data.last).to.be.a('string')
//       expect(data.low).to.be.a('string')
//       expect(data.high).to.be.a('string')
//       expect(data.vol).to.be.a('string')
//       expect(data.exchange).to.equal('btce')
//       expect(data.pair).to.equal('LTC_BTC')
//       done()
//     })
//   })
//
//   it('Should return an object of btce DSH/USD data', done => {
//     coinTicker('btce', 'DSH_USD').then(data => {
//       expect(data).to.be.an('object')
//       expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair')
//       expect(data.last).to.be.a('string')
//       expect(data.low).to.be.a('string')
//       expect(data.high).to.be.a('string')
//       expect(data.vol).to.be.a('string')
//       expect(data.exchange).to.equal('btce')
//       expect(data.pair).to.equal('DSH_USD')
//       done()
//     })
//   })
//
//   it('Should return an object of btce ETH/LTC data', done => {
//     coinTicker('btce', 'ETH_LTC').then(data => {
//       expect(data).to.be.an('object')
//       expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair')
//       expect(data.last).to.be.a('string')
//       expect(data.low).to.be.a('string')
//       expect(data.high).to.be.a('string')
//       expect(data.vol).to.be.a('string')
//       expect(data.exchange).to.equal('btce')
//       expect(data.pair).to.equal('ETH_LTC')
//       done()
//     })
//   })
//
//   it('Should return an object of Bitstamp BTC/USD data', done => {
//     coinTicker('bitstamp').then(data => {
//       expect(data).to.be.an('object')
//       expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair')
//       expect(data.last).to.be.a('string')
//       expect(data.low).to.be.a('string')
//       expect(data.high).to.be.a('string')
//       expect(data.vol).to.be.a('string')
//       expect(data.exchange).to.equal('bitstamp')
//       expect(data.pair).to.equal('BTC_USD')
//       done()
//     })
//   })
//
//   it('Should return an object of Bitstamp BTC/EUR data', done => {
//     coinTicker('bitstamp', 'BTC_EUR')
//       .then(data => {
//         expect(data).to.be.an('object')
//         expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair')
//         expect(data.last).to.be.a('string')
//         expect(data.low).to.be.a('string')
//         expect(data.high).to.be.a('string')
//         expect(data.vol).to.be.a('string')
//         expect(data.exchange).to.equal('bitstamp')
//         expect(data.pair).to.equal('BTC_EUR')
//       })
//       .then(done)
//       .catch(err => done(err))
//   })
//
//   it('Should return an object of Bitstamp EUR/USD data', done => {
//     coinTicker('bitstamp', 'EUR_USD')
//       .then(data => {
//         expect(data).to.be.an('object')
//         expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair')
//         expect(data.last).to.be.a('string')
//         expect(data.low).to.be.a('string')
//         expect(data.high).to.be.a('string')
//         expect(data.vol).to.be.a('string')
//         expect(data.exchange).to.equal('bitstamp')
//         expect(data.pair).to.equal('EUR_USD')
//       })
//       .then(done)
//       .catch(err => done(err))
//   })
//
//   it('Should return an object of Bitstamp XRP/EUR data', done => {
//     coinTicker('bitstamp', 'XRP_EUR')
//       .then(data => {
//         expect(data).to.be.an('object')
//         expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair')
//         expect(data.last).to.be.a('string')
//         expect(data.low).to.be.a('string')
//         expect(data.high).to.be.a('string')
//         expect(data.vol).to.be.a('string')
//         expect(data.exchange).to.equal('bitstamp')
//         expect(data.pair).to.equal('XRP_EUR')
//       })
//       .then(done)
//       .catch(err => done(err))
//   })
//
//   it('Should return an object of Kraken BTC/USD data', done => {
//     coinTicker('kraken')
//       .then(data => {
//         expect(data).to.be.an('object')
//         expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair')
//         expect(data.last).to.be.a('string')
//         expect(data.low).to.be.a('string')
//         expect(data.high).to.be.a('string')
//         expect(data.vol).to.be.a('string')
//         expect(data.exchange).to.equal('kraken')
//         expect(data.pair).to.equal('BTC_USD')
//       })
//       .then(done)
//       .catch(err => done(err))
//   })
//
//   it('Should return an object of Kraken ETH/USD data', done => {
//     coinTicker('kraken', 'ETH_USD')
//       .then(data => {
//         expect(data).to.be.an('object')
//         expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair')
//         expect(data.last).to.be.a('string')
//         expect(data.low).to.be.a('string')
//         expect(data.high).to.be.a('string')
//         expect(data.vol).to.be.a('string')
//         expect(data.exchange).to.equal('kraken')
//         expect(data.pair).to.equal('ETH_USD')
//       })
//       .then(done)
//       .catch(err => done(err))
//   })
//
//   it('Should return an object of Kraken ETC/BTC data', done => {
//     coinTicker('kraken', 'ETC_BTC')
//       .then(data => {
//         expect(data).to.be.an('object')
//         expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair')
//         expect(data.last).to.be.a('string')
//         expect(data.low).to.be.a('string')
//         expect(data.high).to.be.a('string')
//         expect(data.vol).to.be.a('string')
//         expect(data.exchange).to.equal('kraken')
//         expect(data.pair).to.equal('ETC_BTC')
//       })
//       .then(done)
//       .catch(err => done(err))
//   })
//
//   it('Should return an object of Kraken LTC/EUR data', done => {
//     coinTicker('kraken', 'LTC_EUR')
//       .then(data => {
//         expect(data).to.be.an('object')
//         expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair')
//         expect(data.last).to.be.a('string')
//         expect(data.low).to.be.a('string')
//         expect(data.high).to.be.a('string')
//         expect(data.vol).to.be.a('string')
//         expect(data.exchange).to.equal('kraken')
//         expect(data.pair).to.equal('LTC_EUR')
//       })
//       .then(done)
//       .catch(err => done(err))
//   })
//
//   it('Should return an object of Kraken BTC/JPY data', done => {
//     coinTicker('kraken', 'BTC_JPY')
//       .then(data => {
//         expect(data).to.be.an('object')
//         expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair')
//         expect(data.last).to.be.a('string')
//         expect(data.low).to.be.a('string')
//         expect(data.high).to.be.a('string')
//         expect(data.vol).to.be.a('string')
//         expect(data.exchange).to.equal('kraken')
//         expect(data.pair).to.equal('BTC_JPY')
//       })
//       .then(done)
//       .catch(err => done(err))
//   })
//
//   it('Should return an object of Okcoin BTC/USD data', done => {
//     coinTicker('okcoin')
//       .then(data => {
//         expect(data).to.be.an('object')
//         expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair')
//         expect(data.last).to.be.a('string')
//         expect(data.low).to.be.a('string')
//         expect(data.high).to.be.a('string')
//         expect(data.vol).to.be.a('string')
//         expect(data.exchange).to.equal('okcoin')
//         expect(data.pair).to.equal('BTC_USD')
//       })
//       .then(done)
//       .catch(err => done(err))
//   })
//
//   it('Should return an object of Okcoin LTC/USD data', done => {
//     coinTicker('okcoin', 'LTC_USD')
//       .then(data => {
//         expect(data).to.be.an('object')
//         expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair')
//         expect(data.last).to.be.a('string')
//         expect(data.low).to.be.a('string')
//         expect(data.high).to.be.a('string')
//         expect(data.vol).to.be.a('string')
//         expect(data.exchange).to.equal('okcoin')
//         expect(data.pair).to.equal('LTC_USD')
//       })
//       .then(done)
//       .catch(err => done(err))
//   })
//
//   it('Should return an object of Bittrex USDT/BTC data', done => {
//     coinTicker('bittrex')
//       .then(data => {
//         expect(data).to.be.an('object')
//         expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair')
//         expect(data.last).to.be.a('string')
//         expect(data.low).to.be.a('string')
//         expect(data.high).to.be.a('string')
//         expect(data.vol).to.be.a('string')
//         expect(data.exchange).to.equal('bittrex')
//         expect(data.pair).to.equal('USDT_BTC')
//       })
//       .then(done)
//       .catch(err => done(err))
//   })
//
//   it('Should return an object of Bittrex BTC/LTC data', done => {
//     coinTicker('bittrex', 'BTC_LTC')
//       .then(data => {
//         expect(data).to.be.an('object')
//         expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair')
//         expect(data.last).to.be.a('string')
//         expect(data.low).to.be.a('string')
//         expect(data.high).to.be.a('string')
//         expect(data.vol).to.be.a('string')
//         expect(data.exchange).to.equal('bittrex')
//         expect(data.pair).to.equal('BTC_LTC')
//       })
//       .then(done)
//       .catch(err => done(err))
//   })
//
//   describe('Exmo exchange', () => {
//     const availablePairs = [
//       'BTC_USD',
//       'BTC_EUR',
//       'BTC_RUB',
//       'BTC_UAH',
//       'DASH_BTC',
//       'DASH_USD',
//       'ETH_BTC',
//       'ETH_USD',
//       'ETH_RUB',
//       'DOGE_BTC',
//       'LTC_BTC',
//       'LTC_RUB',
//     ]
//
//     availablePairs.forEach(pair => {
//       it(`Should return an object of EXMO ${pair} data`, done => {
//         coinTicker('exmo', pair)
//           .then(data => {
//             expect(data).to.be.an('object')
//             expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair')
//             expect(data.last).to.be.a('string')
//             expect(data.low).to.be.a('string')
//             expect(data.high).to.be.a('string')
//             expect(data.vol).to.be.a('string')
//             expect(data.exchange).to.equal('exmo')
//             expect(data.pair).to.equal(pair)
//           })
//           .then(done)
//           .catch(err => done(err))
//       })
//     })
//   })
//
//   describe('Poloniex exchange', () => {
//     const availablePairs = [
//       'USDT_BTC',
//       'BTC_ETH',
//       'BTC_XRP',
//       'BTC_DASH',
//       'USDT_ETH',
//       'BTC_XMR',
//       'BTC_ETC',
//       'BTC_FCT',
//       'BTC_ZEC',
//       'BTC_LTC',
//       'USDT_DASH',
//       'BTC_GNT',
//       'USDT_XRP',
//       'BTC_DCR',
//       'BTC_REP',
//       'BTC_MAID',
//       'BTC_LSK',
//       'USDT_XMR',
//       'BTC_DOGE',
//       'BTC_AMP',
//       'BTC_XEM',
//       'BTC_SJCX',
//       'USDT_ETC',
//       'BTC_STEEM',
//       'ETH_ETC',
//       'BTC_NAV',
//       'BTC_SYS',
//       'ETH_GNT',
//       'USDT_ZEC',
//       'USDT_LTC',
//     ]
//
//     availablePairs.forEach((pair) => {
//       it(`Should return an object of Poloniex ${pair} data`, done => {
//         coinTicker('poloniex', pair)
//           .then(data => {
//             expect(data).to.be.an('object');
//             expect(data.rawData).to.be.an('object');
//             expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair', 'rawData');
//             expect(data.last).to.be.a('string');
//             expect(data.low).to.be.a('string');
//             expect(data.high).to.be.a('string');
//             expect(data.vol).to.be.a('string');
//             expect(data.exchange).to.equal('poloniex');
//             // expect(data.pair).to.equal(pair);
//           })
//           .then(done)
//           .catch(err => done(err));
//       });
//     });
//   });
// // });
//     //         expect(data).to.be.an('object')
//     //         expect(data).to.have.all.keys('last', 'ask', 'bid', 'low', 'high', 'vol', 'timestamp', 'exchange', 'pair')
//     //         expect(data.last).to.be.a('string')
//     //         expect(data.low).to.be.a('string')
//     //         expect(data.high).to.be.a('string')
//     //         expect(data.vol).to.be.a('string')
//     //         expect(data.exchange).to.equal('poloniex')
//     //         expect(data.pair).to.equal(pair)
//     //       })
//     //       .then(done)
//     //       .catch(err => done(err))
//     //   })
//     // })
//   // })
//
//   it('Should send error message if given invalid arguments', () => {
//     expect(coinTicker('not an exchange')).to.be.a('string')
//     expect(coinTicker('not an exchange')).to.equal('Unrecognized exchange')
//   })
//
//   it('Should send error message if given no arguments', () => {
//     expect(coinTicker()).to.be.a('string')
//     expect(coinTicker()).to.equal('Unrecognized exchange')
//   })
})

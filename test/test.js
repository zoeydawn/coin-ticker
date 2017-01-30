const chai = require('chai');
const { expect } = chai;

const coinTicker = require('../index.js');

describe('coinTicker', () => {
  // console.log('coinTicker:', coinTicker('bitfinex'));
  it('Should return object of Bitfinex data', () => {
    expect(coinTicker('bitfinex')).to.have.property('last');
  })

  // it('Should throw error if given invalid arguments', () => {
  //   expect(() => {
  //     coinTicker('not an exchange');
  //   }).to.throw();
  // })
  //
  // it('Should throw error if given no arguments', () => {
  //   expect(() => {
  //     coinTicker();
  //   }).to.throw();
  // })

})

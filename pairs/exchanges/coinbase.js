module.exports = () => {
  return new Promise((res, rej) => {
    res([
      'BTC_USD',
      'ETH_USD',
      'LTC_USD',
      'BTC_EUR',
      'ETH_EUR',
      'LTC_EUR',
    ])
  });
}

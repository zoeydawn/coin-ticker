module.exports = () => {
  return new Promise((res, rej) => {
    res([
      'BTC_USD',
      'LTC_USD',
      'ETH_USD',
    ])
  });
}

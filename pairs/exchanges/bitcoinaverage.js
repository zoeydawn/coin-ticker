module.exports = () => {
  return new Promise((res, rej) => {
    res([
      "BTC_USD",
      "BTC_EUR",
      "BTC_GBP",
      "BTC_CNY",
      "ETH_USD",
      "ETH_EUR",
      "ETH_GBP",
      "ETH_CNY",
    ])
  });
}

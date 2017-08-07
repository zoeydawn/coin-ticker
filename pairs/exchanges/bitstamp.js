module.exports = () => {
  return new Promise((res, rej) => {
    res([
      "BTC_USD",
      "BTC_EUR",
      "EUR_USD",
      "XRP_USD",
      "XRP_EUR",
      "XRP_BTC",
      "LTC_USD",
      "LTC_EUR",
      "LTC_BTC",
    ])
  });
}

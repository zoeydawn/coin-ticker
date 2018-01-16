const axios = require('axios');

module.exports = (pair) => {
  return axios.get(`https://bleutrade.com/api/v2/public/getmarketsummary?market=${pair}`)
    .then((res) => {
      if (res.data.success === 'false') {
        throw 'invalid currency pair';
      }

      const { MarketName, High, Low, Last, Volume, Bid, Ask } = res.data.result[0];
        
      return {
        last: Last,
        ask: Ask,
        bid: Bid,
        low: Low,
        high: High,
        vol: Volume,
        timestamp: Date.now() / 1000,
        exchange: 'bleutrade',
        pair: MarketName,
        rawData: res.data.result[0]
      };
    })
    .catch((err) => {
      return err;
    });
}

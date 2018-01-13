const axios = require('axios');

module.exports = (pair) => {
  return axios.get(`https://bleutrade.com/api/v2/public/getmarketsummary?market=${pair}`)
    .then((res) => {
      if (res.data.success === 'false') {
        throw 'invalid currency pair';
      }

      const { MarketCurrency,BaseCurrency,MarketName,PrevDay,High,Low,Last,Average,Volume,BaseVolume,TimeStamp,Bid,Ask, IsActive } = res.data.result;
        
      return {
        last: Last,
        ask: Ask,
        bid: Bid,
        low: 'not provided',
        high: 'not provided',
        vol: 'not provided',
        timestamp,
        exchange: 'bleutrade',
        pair,
        rawData: res.data,
      };
    })
    .catch((err) => {
      return 'invalid currency pair';
    });
}
